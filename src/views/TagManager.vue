<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Slug</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody v-if="tags">
        <tr v-for="tag in tags" :key="tag.slug">
          <td>{{ tag.name }}</td>
          <td>{{ tag.slug }}</td>
          <td>
            <button
              class="button is-warning is-small mr-1"
              v-on:click="openModal(tag)"
            >
              edit</button
            ><button
              class="button is-danger is-small mr-1"
              v-on:click="deleteTag(tag.slug)"
            >
              delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="modal" v-bind:class="{ 'is-active': modalActive }">
      <div class="modal-background" v-on:click="closeModal"></div>
      <div class="modal-content">
        <div class="box">
          <div class="field">
            <input
              class="input"
              type="text"
              placeholder="Slug"
              v-model="tagSlug"
              readonly
            />
          </div>
          <div class="field">
            <input
              class="input"
              type="text"
              placeholder="Name"
              v-model="tagName"
            />
          </div>
          <button class="button" v-on:click="updateTag" aria-label="close">
            Update
          </button>
        </div>
      </div>

      <button
        class="modal-close is-large"
        v-on:click="closeModal"
        aria-label="close"
      ></button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Tag from "@/types/Tag";
import axios from "axios";

export default defineComponent({
  setup() {
    const tags = ref<Tag[]>();
    const tagName = ref<string>();
    const tagSlug = ref<string>();
    const modalActive = ref<boolean>();
    onMounted(() => {
      fetchTags();
    });
    function fetchTags() {
      axios
        .get(process.env.VUE_APP_API_ROOT + "/tags")
        .then((res) => (tags.value = res.data))
        .catch((e) => console.log(e));
    }

    const openModal = (tag: Tag) => {
      tagName.value = tag.name;
      tagSlug.value = tag.slug;
      modalActive.value = true;
    };

    const closeModal = () => {
      modalActive.value = false;
    };

    const deleteTag = (tagSLug: string) => {
      axios
        .delete(process.env.VUE_APP_API_ROOT + "/tags/" + tagSLug)
        .then((_) => fetchTags())
        .catch((e) => console.log(e));
    };

    const updateTag = () => {
      const tag = {
        name: tagName.value,
        slug: tagSlug.value,
      };
      axios
        .patch(process.env.VUE_APP_API_ROOT + "/tags/" + tag.slug, tag)
        .then(() => {
          fetchTags();
          closeModal();
        })
        .catch((e) => console.log(e));
    };

    return {
      tags,
      modalActive,

      tagName,
      tagSlug,
      openModal,
      closeModal,
      deleteTag,
      updateTag,
    };
  },
});
</script>


<style>
</style>