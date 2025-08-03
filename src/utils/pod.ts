import { supabase } from '../supabase';
import { getAlias } from './alias';
import { v4 as uuidv4 } from 'uuid';

const POD_TOPICS = [
  'Mental Health Awareness',
  'Managing Anxiety',
  'Self-Esteem & Confidence',
  'Daily Wins',
  'Productivity & Balance'
];

function generatePodName(): string {
  const topic = POD_TOPICS[Math.floor(Math.random() * POD_TOPICS.length)];
  return `${topic} Pod`;
}

export async function joinOrCreatePod(): Promise<string | null> {
  const alias = getAlias();

  // Step 1: Fetch any available pod
  const { data: pods, error: podError } = await supabase
    .from('pods')
    .select('*')
    .order('created_at', { ascending: true });

  if (podError) {
    console.error('Error fetching pods:', podError);
    return null;
  }

  let podId: string;

  // Step 2: If no pods, create one
  if (!pods || pods.length === 0) {
    const podName = generatePodName();
    const { data: newPod, error: createError } = await supabase
      .from('pods')
      .insert({ name: podName })
      .select()
      .single();

    if (createError || !newPod) {
      console.error('Error creating pod:', createError);
      return null;
    }

    podId = newPod.id;
  } else {
    podId = pods[0].id; // join the oldest pod for now
  }

  // Step 3: Add user to pod_members if not already in
  const { data: existing, error: checkErr } = await supabase
    .from('pod_members')
    .select('*')
    .eq('pod_id', podId)
    .eq('alias', alias);

  if (checkErr) {
    console.error('Error checking pod_members:', checkErr);
    return null;
  }

  if (existing.length === 0) {
    const { error: insertErr } = await supabase.from('pod_members').insert({
      pod_id: podId,
      alias
    });

    if (insertErr) {
      console.error('Error adding to pod_members:', insertErr);
      return null;
    }
  }

  return podId;
}
