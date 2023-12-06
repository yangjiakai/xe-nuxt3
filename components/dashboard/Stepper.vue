<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
const e1 = ref(1);
const steps = ref(2);

const disabled = computed(() => {
  return e1.value === 1
    ? "prev"
    : e1.value === steps.value
    ? "next"
    : undefined;
});
</script>

<template>
  <div class="">
    <v-stepper v-model="e1">
      <template v-slot:default="{ prev, next }">
        <v-stepper-header>
          <template v-for="n in steps" :key="`${n}-step`">
            <v-stepper-item
              :complete="e1 > n"
              :step="`Step {{ n }}`"
              :value="n"
              editable
            ></v-stepper-item>

            <v-divider v-if="n !== steps" :key="n"></v-divider>
          </template>
        </v-stepper-header>

        <v-stepper-window>
          <v-stepper-window-item
            v-for="n in steps"
            :key="`${n}-content`"
            :value="n"
          >
            <v-card color="grey-lighten-1" height="200"></v-card>
          </v-stepper-window-item>
        </v-stepper-window>

        <v-stepper-actions
          :disabled="disabled"
          @click:prev="prev"
          @click:next="next"
          prevText="上一步"
          nextText="下一步"
        ></v-stepper-actions>
      </template>
    </v-stepper>
  </div>
</template>

<style scoped lang="scss"></style>
