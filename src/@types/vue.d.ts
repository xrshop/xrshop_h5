/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue from 'vue';

declare module 'vue/types/vue' {
  export interface Vue {
    $hint(text: string, color?: string): void;
    $confirm(text: string, confirm?: () => void, cancel?: () => void, closed?: () => void): void;
  }
}
