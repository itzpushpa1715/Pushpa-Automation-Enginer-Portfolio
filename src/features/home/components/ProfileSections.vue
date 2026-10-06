<script setup lang="ts">
import { onMounted, ref } from "vue";
import { t } from "../../../i18n/utils/translate";

type ResumeWork = {
  role: string;
  company: string;
  employment_type?: string;
  location?: string;
  start?: string;
  end?: string;
  responsibilities?: string[];
};

type ResumeEducation = {
  degree: string;
  institution: string;
  location?: string;
  period?: string;
  status?: string;
  creditsCompleted?: number;
  credits?: number;
};

type ResumeCertification = {
  name: string;
  issuer?: string;
  issued?: string;
  expires?: string;
  note?: string;
};

type ResumeData = {
  work_experience: ResumeWork[];
  education: ResumeEducation[];
  certifications: ResumeCertification[];
};

type FieldNote = {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  href: string;
};

const profile = ref<ResumeData | null>(null);
const activityUrl = "https://www.linkedin.com/in/pushpakoirala/recent-activity/all/";

const fieldNotes: FieldNote[] = [
  {
    category: "Building automation",
    date: "September 2026",
    title: "Tuning a KNX building-control system in ETS4",
    excerpt:
      "A hands-on lab connecting multi-vendor KNX devices for lighting, dimming, motion-based control and motorised blinds, with group-address structure and commissioning in ETS4.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7502002461579190275/",
  },
  {
    category: "Robotics",
    date: "JAMK coursework",
    title: "A pick-and-place cycle in ABB RobotStudio",
    excerpt:
      "RAPID routines for home, pick and place; safe linear approach paths; and a Smart Component gripper driven by simulated I/O across a six-plate cycle.",
    href: activityUrl,
  },
  {
    category: "SCADA",
    date: "JAMK coursework",
    title: "Taking a water process from PLC logic to the operator screen",
    excerpt:
      "A water-process assignment built with an S7-1500 and WinCC, including reusable faceplates, live flow and level displays, PID loops and alarm handling.",
    href: activityUrl,
  },
  {
    category: "Engineering and AI",
    date: "September 2026",
    title: "A weekend at the micro1 Frontier Engineering Challenge",
    excerpt:
      "A short build-and-experiment sprint with coding agents, exploring how to turn an open-ended engineering prompt into a working idea.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7503740936259133441/",
  },
  {
    category: "Professional development",
    date: "August 2026",
    title: "Earning micro1 Certified Talent status",
    excerpt:
      "A milestone after the micro1 AI interview, alongside continued work at the intersection of electrical systems, automation and AI training.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7500251714453909504/",
  },
];

onMounted(async () => {
  try {
    const response = await fetch("/resume.json");
    if (!response.ok) return;
    profile.value = (await response.json()) as ResumeData;
  } catch {
    profile.value = null;
  }
});
</script>

<template>
  <div v-if="profile" class="profile-content">
    <section id="experience" class="profile-band">
      <div class="grid profile-grid">
        <header class="profile-heading">
          <p class="profile-kicker">01 / {{ t("profile-experience-title") }}</p>
          <h2>{{ t("profile-experience-heading") }}</h2>
          <p>{{ t("profile-experience-lead") }}</p>
        </header>
        <ol class="experience-list">
          <li v-for="role in profile.work_experience" :key="`${role.company}-${role.role}-${role.start}`" class="experience-row">
            <div class="experience-date">
              <span>{{ role.start }}<template v-if="role.end"> — {{ role.end }}</template></span>
              <span v-if="role.location">{{ role.location }}</span>
            </div>
            <div class="experience-detail">
              <h3>{{ role.role }}</h3>
              <p class="experience-employer">
                {{ role.company }}<template v-if="role.employment_type"> · {{ role.employment_type }}</template>
              </p>
              <ul v-if="role.responsibilities?.length">
                <li v-for="responsibility in role.responsibilities" :key="responsibility">{{ responsibility }}</li>
              </ul>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section id="education" class="profile-band profile-band-muted">
      <div class="grid profile-grid">
        <header class="profile-heading">
          <p class="profile-kicker">02 / {{ t("profile-education-title") }}</p>
          <h2>{{ t("profile-education-heading") }}</h2>
          <p>{{ t("profile-education-lead") }}</p>
        </header>
        <div class="education-list">
          <article v-for="education in profile.education" :key="`${education.institution}-${education.degree}`" class="education-entry">
            <p class="education-status">{{ education.status }}</p>
            <h3>{{ education.degree }}</h3>
            <p>{{ education.institution }} · {{ education.location }}</p>
            <p class="education-period">{{ education.period }}</p>
            <p v-if="education.creditsCompleted && education.credits" class="education-credits">
              {{ education.creditsCompleted }} / {{ education.credits }} credits completed
            </p>
          </article>
        </div>
        <div class="certifications">
          <h3 class="certifications-title">{{ t("profile-certifications-title") }}</h3>
          <ul>
            <li v-for="certification in profile.certifications" :key="`${certification.issuer}-${certification.name}`">
              <div>
                <strong>{{ certification.name }}</strong>
                <span>{{ certification.issuer }}</span>
              </div>
              <time v-if="certification.issued || certification.expires">
                <template v-if="certification.issued">{{ certification.issued }}</template>
                <template v-if="certification.issued && certification.expires"> · </template>
                <template v-if="certification.expires">Expires {{ certification.expires }}</template>
              </time>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section id="blog" class="field-notes">
      <div class="grid profile-grid">
        <header class="profile-heading field-notes-heading">
          <p class="profile-kicker">03 / {{ t("profile-notes-title") }}</p>
          <h2>{{ t("profile-notes-heading") }}</h2>
          <p>{{ t("profile-notes-lead") }}</p>
        </header>
        <div class="field-notes-list">
          <article v-for="note in fieldNotes" :key="note.title" class="field-note">
            <p class="field-note-meta">{{ note.category }} <span>{{ note.date }}</span></p>
            <h3>{{ note.title }}</h3>
            <p class="field-note-excerpt">{{ note.excerpt }}</p>
            <a :href="note.href" target="_blank" rel="noopener noreferrer">{{ t("profile-read-link") }} <span aria-hidden="true">↗</span></a>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.profile-content {
  width: 100%;
  color: var(--color-text-400);
}

.profile-band,
.field-notes {
  width: 100%;
  padding: 96px var(--space-outer);
}

.profile-band-muted {
  background: var(--color-background-400);
}

.profile-grid {
  align-items: start;
  row-gap: var(--space-xxl);
}

.profile-heading {
  grid-column: 1 / 13;

  @include mixins.mq("lg") {
    grid-column: 1 / 4;
    position: sticky;
    top: var(--space-xxl);
  }

  h2 {
    margin: var(--space-sm) 0;
    font-size: var(--font-size-title-md);
    line-height: var(--line-height-title);
  }

  > p:last-child {
    max-width: 34ch;
    color: var(--color-text-300);
    line-height: var(--line-height-copy);
  }
}

.profile-kicker,
.education-status {
  color: var(--color-orange-400);
  font-size: var(--font-size-sm);
  font-weight: 700;
  text-transform: uppercase;
}

.experience-list {
  grid-column: 1 / 13;
  list-style: none;
  margin: 0;
  padding: 0;

  @include mixins.mq("lg") {
    grid-column: 5 / 13;
  }
}

.experience-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-sm);
  padding: var(--space-lg) 0;
  border-top: 1px solid var(--color-grayscale-500);

  @include mixins.mq("md") {
    grid-template-columns: minmax(150px, 0.8fr) minmax(0, 2fr);
    gap: var(--space-lg);
  }
}

.experience-date,
.experience-employer,
.education-entry > p:not(.education-status),
.certifications li span,
.certifications li time {
  color: var(--color-text-300);
  line-height: var(--line-height-copy);
}

.experience-date {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  font-size: var(--font-size-sm);
}

.experience-detail {
  h3 {
    font-size: var(--font-size-title-xs);
    line-height: var(--line-height-title);
  }

  ul {
    margin-top: var(--space-sm);
    padding-left: 1.2em;
    color: var(--color-text-300);
    line-height: var(--line-height-copy);
  }

  li + li {
    margin-top: var(--space-xs);
  }
}

.experience-employer {
  margin-top: var(--space-xxs);
}

.education-list {
  grid-column: 1 / 13;
  border-top: 1px solid var(--color-grayscale-500);

  @include mixins.mq("lg") {
    grid-column: 5 / 13;
  }
}

.education-entry {
  padding: var(--space-lg) 0 var(--space-xl);
  border-bottom: 1px solid var(--color-grayscale-500);

  h3 {
    margin: var(--space-xs) 0;
    font-size: var(--font-size-title-sm);
  }
}

.education-period,
.education-credits {
  margin-top: var(--space-xs);
}

.education-credits {
  color: var(--color-text-400);
  font-weight: 700;
}

.certifications {
  grid-column: 1 / 13;

  @include mixins.mq("lg") {
    grid-column: 5 / 13;
  }

  &-title {
    margin: var(--space-xl) 0 var(--space-md);
    font-size: var(--font-size-title-xs);
  }

  ul {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0 var(--space-xl);
    list-style: none;
    padding: 0;
    margin: 0;

    @include mixins.mq("md") {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--space-xs);
    padding: var(--space-md) 0;
    border-top: 1px solid var(--color-grayscale-500);
  }

  li div {
    display: flex;
    flex-direction: column;
    gap: var(--space-xxs);
  }

  li time {
    font-size: var(--font-size-sm);
  }
}

.field-notes {
  background: var(--color-black-400);
  color: var(--color-white-400);

  .profile-heading {
    grid-column: 1 / 13;

    @include mixins.mq("lg") {
      grid-column: 1 / 5;
    }

    > p:last-child {
      color: var(--color-gray-400);
    }
  }

  .profile-kicker {
    color: var(--color-cyan-400);
  }
}

.field-notes-list {
  grid-column: 1 / 13;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0 var(--space-xl);

  @include mixins.mq("md") {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @include mixins.mq("lg") {
    grid-column: 6 / 13;
  }
}

.field-note {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  padding: var(--space-lg) 0;
  border-top: 1px solid rgba(255, 255, 255, 0.24);

  h3 {
    margin: var(--space-xs) 0;
    font-size: var(--font-size-title-xs);
    line-height: var(--line-height-title);
  }

  a {
    margin-top: auto;
    padding-top: var(--space-md);
    color: var(--color-cyan-400);
    font-weight: 700;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
}

.field-note-meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  color: var(--color-cyan-400);
  font-size: var(--font-size-sm);
  text-transform: uppercase;
}

.field-note-excerpt {
  color: var(--color-gray-400);
  line-height: var(--line-height-copy);
}
</style>
