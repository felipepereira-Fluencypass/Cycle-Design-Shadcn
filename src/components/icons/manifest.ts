/**
 * Cycle Design — Icon Manifest (custom icons only)
 *
 * Apenas ícones que NÃO existem no Lucide.
 * Para ícones genéricos, use Lucide via <CycleIcon icon={Home} size="sm" />
 */
import type { IconManifestEntry } from './types'

export const ICON_MANIFEST: Record<string, IconManifestEntry> = {
  // learning-core
  Achievement: { category: 'learning-core', status: 'stable' },
  Answer: { category: 'learning-core', status: 'stable' },
  Badge: { category: 'learning-core', status: 'stable' },
  Certificate: { category: 'learning-core', status: 'stable' },
  Checkpoint: { category: 'learning-core', status: 'stable' },
  Completion: { category: 'learning-core', status: 'stable' },
  Course: { category: 'learning-core', status: 'stable' },
  Diploma: { category: 'learning-core', status: 'stable' },
  Exercise: { category: 'learning-core', status: 'stable' },
  Flashcard: { category: 'learning-core', status: 'stable' },
  Goal: { category: 'learning-core', status: 'stable' },
  Highlight: { category: 'learning-core', status: 'stable' },
  Lesson: { category: 'learning-core', status: 'stable' },
  Milestone: { category: 'learning-core', status: 'stable' },
  Module: { category: 'learning-core', status: 'stable' },
  Progress: { category: 'learning-core', status: 'stable' },
  Question: { category: 'learning-core', status: 'stable' },
  Quiz: { category: 'learning-core', status: 'stable' },
  Recap: { category: 'learning-core', status: 'stable' },
  Streak: { category: 'learning-core', status: 'stable' },
  Task: { category: 'learning-core', status: 'stable' },
  Unit: { category: 'learning-core', status: 'stable' },

  // language-learning
  Chat: { category: 'language-learning', status: 'stable' },
  Conversation: { category: 'language-learning', status: 'stable' },
  Dialogue: { category: 'language-learning', status: 'stable' },
  Dictionary: { category: 'language-learning', status: 'stable' },
  Feedback: { category: 'language-learning', status: 'stable' },
  Fluency: { category: 'language-learning', status: 'stable' },
  Grammar: { category: 'language-learning', status: 'stable' },
  Language: { category: 'language-learning', status: 'stable' },
  Listening: { category: 'language-learning', status: 'stable' },
  MemoryCard: { category: 'language-learning', status: 'stable' },
  Reading: { category: 'language-learning', status: 'stable' },
  Repetition: { category: 'language-learning', status: 'stable' },
  Sentence: { category: 'language-learning', status: 'stable' },
  Translate: { category: 'language-learning', status: 'stable' },
  Vocabulary: { category: 'language-learning', status: 'stable' },

  // lesson-formats
  GroupClass: { category: 'lesson-formats', status: 'stable' },
  Live: { category: 'lesson-formats', status: 'stable' },
  Presentation: { category: 'lesson-formats', status: 'stable' },
  PrivateClass: { category: 'lesson-formats', status: 'stable' },
  RecordedClass: { category: 'lesson-formats', status: 'stable' },
  Whiteboard: { category: 'lesson-formats', status: 'stable' },

  // schedule
  Deadline: { category: 'schedule', status: 'stable' },
  Recurring: { category: 'schedule', status: 'stable' },
  Schedule: { category: 'schedule', status: 'stable' },

  // status
  DotLive: { category: 'status', status: 'stable' },
  Required: { category: 'status', status: 'stable' },

  // technology
  Ray: { category: 'technology', status: 'stable' },
}
