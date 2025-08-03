import { supabase } from '../supabase';
import { getAlias } from './alias';
import { v4 as uuidv4 } from 'uuid';

export async function findBuddy(): Promise<string | null> {
  const alias = getAlias();

  // Check if someone is waiting
  const { data: waiting, error } = await supabase
    .from('buddy_queue')
    .select('*')
    .eq('status', 'waiting')
    .not('alias', 'eq', alias) // don't match with yourself
    .limit(1);

  if (error) {
    console.error('Error checking buddy queue:', error);
    return null;
  }

  // Found someone → match both users
  if (waiting.length > 0) {
    const partner = waiting[0];
    const roomId = uuidv4();

    await supabase
      .from('buddy_queue')
      .update({ status: 'matched', room_id: roomId })
      .eq('id', partner.id);

    await supabase.from('buddy_queue').insert({
      alias,
      status: 'matched',
      room_id: roomId
    });

    return roomId;
  }

  // No one waiting → add yourself
  const { error: insertErr } = await supabase.from('buddy_queue').insert({
    alias,
    status: 'waiting'
  });

  if (insertErr) {
    console.error('Error joining buddy queue:', insertErr);
    return null;
  }

  return 'waiting';
}
