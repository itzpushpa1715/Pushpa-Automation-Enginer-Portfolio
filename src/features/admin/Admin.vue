<script setup lang="ts">
import { ref, onMounted } from 'vue';

const apiBase = ref('');
const token = ref('');
const keys = ref<string[]>([]);
const selected = ref('');
const editor = ref('');
const status = ref('');

function baseUrl(b: string){ return b.replace(/\/+$/, ''); }
function keysUrl(){ const b = baseUrl(apiBase.value); return b ? `${b}/api/keys` : '/api/keys' }
function contentUrl(key: string){ const b = baseUrl(apiBase.value); return b ? `${b}/api/content/${encodeURIComponent(key)}` : `/api/content/${encodeURIComponent(key)}` }

async function loadKeys(){
  status.value = 'Loading keys...';
  try{
    const res = await fetch(keysUrl());
    if(!res.ok) throw new Error('Failed to list keys');
    keys.value = await res.json();
    const firstKey = keys.value[0];
    if(firstKey) selected.value = firstKey;
    status.value = 'Keys loaded.';
  }catch(e){ status.value = String(e) }
}

async function load(){
  if(!selected.value) return status.value = 'Select a key';
  status.value = 'Loading content...';
  try{
    const res = await fetch(contentUrl(selected.value));
    if(!res.ok) throw new Error('Failed to fetch content');
    const json = await res.json();
    editor.value = JSON.stringify(json, null, 2);
    status.value = 'Loaded.';
  }catch(e){ status.value = String(e) }
}

async function save(){
  try{ JSON.parse(editor.value) }catch(e){ status.value = 'Invalid JSON'; return }
  if(!token.value) return status.value = 'Provide admin token';
  status.value = 'Saving...';
  try{
    const res = await fetch(contentUrl(selected.value), { method:'PUT', headers:{ 'Content-Type':'application/json', 'X-Admin-Token': token.value }, body: editor.value });
    const j = await res.json();
    if(!res.ok) throw new Error(j.error||JSON.stringify(j));
    status.value = 'Saved.';
  }catch(e){ status.value = String(e) }
}

onMounted(()=>{ loadKeys() });
</script>

<template>
  <div style="padding:24px;max-width:1100px;margin:0 auto">
    <h1>Admin — Site Content</h1>
    <div style="margin-bottom:12px;color:#666">Edit JSON content stored in KV (via Worker) or local API.</div>
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:12px">
      <input v-model="apiBase" placeholder="API base (leave empty for relative)" style="flex:1;padding:8px" />
      <select v-model="selected" style="width:220px">
        <option v-for="k in keys" :key="k" :value="k">{{k}}</option>
      </select>
      <input v-model="token" placeholder="Admin token" style="width:260px;padding:8px" />
      <button @click="load">Load</button>
      <button @click="save">Save</button>
    </div>
    <textarea v-model="editor" style="width:100%;min-height:60vh;font-family:monospace"></textarea>
    <div style="margin-top:8px;color:#444">{{status}}</div>
  </div>
</template>

<style scoped>
/* small styles for admin */
</style>
