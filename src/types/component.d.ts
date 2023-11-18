import 'vue'
import wGuess from '@/components/Guess/Guess.vue'
import wSwiper from '@/components/Swiper/Swiper.vue'

declare module 'vue' {
  export interface GlobalComponents {
    Swiper: typeof Swiper
    Guess: typeof Guess
  }
}

// 组件实例类型
export type GuessInstance = InstanceType<typeof Guess>
