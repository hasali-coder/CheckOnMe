# CheckOnMe

**CheckOnMe** is an anonymous peer-to-peer mental health support platform designed specifically for men. It offers a safe digital space where users can connect without judgment, share thoughts, and find support — without revealing personal identities.

> "Speak freely. Heal quietly."

---

## Project Goals

- Provide men with **anonymous support channels**
- Enable **peer matching** based on shared struggles (e.g., fatherhood, anxiety, loneliness)
- Reduce mental health stigma through **community reflections**
- Use design language that is **modern, intuitive, and emotionally safe**

---

## Features

- **Anonymous Login** with auto-generated usernames (e.g., _MindfulOtter42_)
- **Buddy Matching**: Pair users based on tags like work stress, grief, social anxiety
- **Conversation Pods**: Join or browse small group discussions
- **Public Reflections Feed**: Post short journal-style entries
- **Real-Time Chat** (optional for MVP)
- **Mood Check-In Tool** (optional future phase)

---

## Live Preview

 
👉 [CheckOnMe Preview](https://check-on-me.vercel.app)

---

## Tech Stack

| Layer         | Tool/Platform     |
|---------------|------------------|
| Frontend      | React + Tailwind CSS (via Lovable AI) |
| Authentication| Supabase Auth    |
| Backend       | Supabase Edge Functions & Database |
| Real-time     | Supabase Realtime Channels |
| Deployment    | Vercel / Netlify (suggested) |

---

## Database Schema (Core Tables)

### `users`
| Column        | Type     | Notes                  |
|---------------|----------|------------------------|
| id            | UUID     | Primary key            |
| alias         | Text     | Anonymous name         |
| tags          | Text[]   | Interest/struggle tags |
| created_at    | Timestamp | Auto generated         |

### `matches`
| Column        | Type     | Notes                  |
|---------------|----------|------------------------|
| id            | UUID     |                        |
| user1_id      | UUID     | FK to users            |
| user2_id      | UUID     | FK to users            |
| created_at    | Timestamp |                        |

### `reflections`
| Column        | Type     | Notes                  |
|---------------|----------|------------------------|
| id            | UUID     |                        |
| user_id       | UUID     | FK to users            |
| content       | Text     | Short reflection       |
| created_at    | Timestamp |                        |

---

## UI Design System

- **Primary Color:** Navy Blue `#0A1F44`
- **Accent Color:** White `#FFFFFF`
- **Typography:** Poppins / Inter / IBM Plex Sans
- **Design Tokens:** Rounded corners, shadowed cards, clean spacing, large tap targets
- **Mobile-First:** Designed from small screens up

---

## Privacy & Safety

- End-to-end user anonymity
- No real names, photos, or external identity linkage
- Moderation-ready structure for abuse reporting
- Optional escalation alerts for concerning messages (in roadmap)

---

## Roadmap

- [ ] Add in-app mood tracker and journal
- [ ] Support real-time chat via Supabase Realtime
- [ ] Add dark mode toggle
- [ ] Implement admin dashboard for volunteer moderators
- [ ] SMS/email reminders for check-ins (Edge Functions)



## License

MIT License 

---
## Feedback & Support

For questions, feedback, or contributions, please open an issue or submit a pull request.

---

> _Built to offer quiet strength and silent support — for the men who carry so much, so silently._
