<script setup lang="ts">
import { ref } from "vue";
import { t } from "../i18n/utils/translate";
import emailjs from "@emailjs/browser";
import Button from "./Button.vue";
import Clickable from "./Clickable.vue";

const { isOpen } = defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits<{
  close: [];
}>();

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "";
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "";
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL ?? "pushpakoirala.work@gmail.com";
const hasEmailJSConfig = Boolean(PUBLIC_KEY && SERVICE_ID && TEMPLATE_ID);

const formData = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const submitStatus = ref<"idle" | "success" | "error">("idle");
const errorMessage = ref("");

const initEmailJS = () => {
  if (!PUBLIC_KEY) return;
  emailjs.init(PUBLIC_KEY);
};

const openMailClient = () => {
  const subject = encodeURIComponent(formData.value.subject || "Contact Form Submission");
  const body = encodeURIComponent(
    `Name: ${formData.value.name}\nEmail: ${formData.value.email}\n\n${formData.value.message}`
  );
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
};

const handleSubmit = async () => {
  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    errorMessage.value = "Please fill in all fields";
    submitStatus.value = "error";
    return;
  }

  isSubmitting.value = true;
  submitStatus.value = "idle";
  errorMessage.value = "";

  if (!hasEmailJSConfig) {
    openMailClient();
    submitStatus.value = "success";
    setTimeout(() => {
      emit("close");
      submitStatus.value = "idle";
    }, 2000);
    isSubmitting.value = false;
    return;
  }

  try {
    initEmailJS();

    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      to_email: CONTACT_EMAIL,
      from_name: formData.value.name,
      from_email: formData.value.email,
      subject: formData.value.subject || "Contact Form Submission",
      message: formData.value.message,
      reply_to: formData.value.email,
    });

    if (response.status === 200) {
      submitStatus.value = "success";
      // Reset form
      formData.value = {
        name: "",
        email: "",
        subject: "",
        message: "",
      };
      // Close modal after 2 seconds
      setTimeout(() => {
        emit("close");
        submitStatus.value = "idle";
      }, 2000);
    } else {
      throw new Error(`EmailJS returned status ${response.status}`);
    }
  } catch (error) {
    console.error("Email send error:", error);
    if (!hasEmailJSConfig) {
      errorMessage.value = "EmailJS is not configured. Your mail client should open instead.";
    } else {
      errorMessage.value = "Failed to send message. Please try again or email directly.";
    }
    submitStatus.value = "error";
  } finally {
    isSubmitting.value = false;
  }
};

const handleClose = () => {
  if (!isSubmitting.value) {
    emit("close");
    submitStatus.value = "idle";
    formData.value = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  }
};

const overlayClick = (e: MouseEvent) => {
  if (e.target === e.currentTarget) {
    handleClose();
  }
};
</script>

<template>
  <div v-if="isOpen" class="contact-modal-overlay" @click="overlayClick">
    <div class="contact-modal">
      <div class="contact-modal-header">
        <h3 class="contact-modal-title">{{ t("get-in-touch") }}</h3>
        <Clickable renderAs="button" class="contact-modal-close" @click="handleClose" :disabled="isSubmitting">
          ✕
        </Clickable>
      </div>

      <form @submit.prevent="handleSubmit" class="contact-modal-form">
        <div class="form-group">
          <label for="name" class="form-label">{{ t("name") || "Name" }}</label>
          <input
            id="name"
            v-model="formData.name"
            type="text"
            class="form-input"
            placeholder="Your name"
            :disabled="isSubmitting"
            required
          />
        </div>

        <div class="form-group">
          <label for="email" class="form-label">{{ t("email") || "Email" }}</label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            class="form-input"
            placeholder="your@email.com"
            :disabled="isSubmitting"
            required
          />
        </div>

        <div class="form-group">
          <label for="subject" class="form-label">{{ t("subject") || "Subject" }}</label>
          <input
            id="subject"
            v-model="formData.subject"
            type="text"
            class="form-input"
            placeholder="What's this about?"
            :disabled="isSubmitting"
          />
        </div>

        <div class="form-group">
          <label for="message" class="form-label">{{ t("message") || "Message" }}</label>
          <textarea
            id="message"
            v-model="formData.message"
            class="form-textarea"
            placeholder="Your message here..."
            rows="5"
            :disabled="isSubmitting"
            required
          ></textarea>
        </div>

        <div v-if="submitStatus === 'error'" class="form-error">
          {{ errorMessage || "Something went wrong. Please try again." }}
        </div>

        <div v-if="submitStatus === 'success'" class="form-success">
          Message sent successfully! ✓
        </div>

        <div class="form-actions">
          <Button
            type="submit"
            variant="accent"
            :disabled="isSubmitting"
            class="form-submit-btn"
          >
            {{ isSubmitting ? "Sending..." : "Send Message" }}
          </Button>
          <Button
            type="button"
            variant="outline"
            @click="handleClose"
            :disabled="isSubmitting"
            class="form-cancel-btn"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  pointer-events: auto;
  animation: fadeIn 0.2s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.contact-modal {
  background: var(--color-white-100, white);
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  padding: 32px;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  animation: slideUp 0.3s ease-in-out;
  color: var(--color-black-400, black);
}

.contact-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.contact-modal-title {
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.contact-modal-close {
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  color: inherit;
  opacity: 0.6;
  transition: opacity 0.2s ease-in-out;

  &:hover:not(:disabled) {
    opacity: 1;
  }

  &:disabled {
    cursor: not-allowed;
  }
}

.contact-modal-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-label {
  font-weight: 500;
  font-size: 14px;
}

.form-input,
.form-textarea {
  padding: 10px 12px;
  border: 1px solid var(--color-black-200, #ccc);
  border-radius: 6px;
  font-family: inherit;
  font-size: 14px;
  color: inherit;
  background: var(--color-white-200, #f9f9f9);
  transition: border-color 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: var(--color-accent, #000);
    background: var(--color-white-100, white);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

.form-textarea {
  resize: vertical;
  font-size: 14px;
}

.form-error {
  padding: 12px;
  background-color: #fee;
  color: #c33;
  border-radius: 6px;
  font-size: 14px;
}

.form-success {
  padding: 12px;
  background-color: #efe;
  color: #3a3;
  border-radius: 6px;
  font-size: 14px;
  text-align: center;
}

.form-actions {
  display: flex;
  gap: 12px;
  margin-top: 20px;
}

.form-submit-btn,
.form-cancel-btn {
  flex: 1;
}
</style>
