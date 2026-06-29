<script setup>
import { storeToRefs } from "pinia";
import { viloyatlar } from "~/data";
import { useApplicantAddress } from "~/store/ApplicantAddress";

const toast = useToast();

const useAddress = useApplicantAddress();

const {
  viloyat,
  district,
  address,
  tuman
} = storeToRefs(useAddress);
const disabled=ref(false)
const { change } = useAddress;

const nextPage = () => {
  if (
    !viloyat.value ||
    !district.value ||
    !address.value.trim()
  ) {
    disabled.value=true
    setTimeout(()=>{
      disabled.value=false
    },5000)
    return toast.error({
      message: "Барча майдонларни тулдиринг!"
    });
  }

  navigateTo("/ReceptionInfo");
};
</script>
<template>
  <div class="pb-16 w-full bg-neutral-100">
    <div class="relative flex justify-center">
      <div class="w-xl mt-12 flex flex-col">
        <div class="flex w-full justify-center flex-wrap p-5">
          <div class="flex h-10 justify-center items-center my-4">
            <div
              class="select-none w-10 h-10 flex text-gray-400 border-2 border-blue-400 rounded-full justify-center items-center"
            >
              1
            </div>
            <div class="h-1 w-10 bg-blue-400"></div>
          </div>
          <div class="flex h-10 justify-center items-center my-4">
            <div
              class="select-none w-10 h-10 flex text-neutral-400 border-2 border-blue-400 rounded-full justify-center items-center"
            >
              2
            </div>
            <div class="h-1 w-10 bg-neutral-400"></div>
          </div>
          <div class="flex h-10 justify-center items-center my-4">
            <div
              class="select-none w-10 h-10 flex text-neutral-400 border-2 border-neutral-400 rounded-full justify-center items-center"
            >
              3
            </div>
            <div class="h-1 w-10 bg-neutral-400"></div>
          </div>
          <div class="flex h-10 justify-center items-center my-4">
            <div
              class="select-none w-10 h-10 flex text-neutral-400 border-2 border-neutral-400 rounded-full justify-center items-center"
            >
              4
            </div>
            <div class="h-1 w-10 bg-neutral-400"></div>
          </div>
          <div class="flex h-10 justify-center items-center my-4">
            <div
              class="select-none w-10 h-10 flex text-neutral-400 border-2 border-neutral-400 rounded-full justify-center items-center"
            >
              5
            </div>
            <div class="h-1 w-10 bg-neutral-400"></div>
          </div>
          <div class="flex h-10 justify-center items-center my-4">
            <div
              class="select-none w-10 h-10 flex text-neutral-400 border-2 border-neutral-400 rounded-full justify-center items-center"
            >
              6
            </div>
          </div>
        </div>

        <div
          class="flex flex-col p-5 overflow-hidden mx-auto bg-white rounded-lg border-2 border-neutral-200 max-w-2xl"
        >
          <p
            class="-mx-5 p-5 -mt-5 mb-5 bg-neutral-100 text-neutral-500 font-bold text-xl"
          >
            Аризачининг яшаш жойи ҳақида маълумот
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            <!-- Яшаш вилояти -->
            <div class="w-full leading-loose">
              <label class="block text-sm text-neutral-700 font-semibold">
                Яшаш вилояти
              </label>

              <div class="inline-block relative w-full">
                <select
                  v-model="viloyat"
                  @change="change(viloyat)"
                  class="block appearance-none w-full bg-white rounded border-2 border-neutral-200 hover:border-neutral-300 px-4 py-2 pr-8 leading-tight focus:outline-none"
                >
                  <option disabled selected value="">-- Танланг --</option>

                  <option v-for="item in viloyatlar" :key="item" :value="item">
                    {{ item }}
                  </option>
                </select>

                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg class="fill-current h-4 w-4" viewBox="0 0 20 20">
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Яшаш тумани -->
            <div class="w-full leading-loose">
              <label class="block text-sm text-neutral-700 font-semibold">
                Яшаш тумани
              </label>

              <div class="inline-block relative w-full">
                <select
                  v-model="district"
                  class="block appearance-none w-full bg-white rounded border-2 border-neutral-200 hover:border-neutral-300 px-4 py-2 pr-8 leading-tight focus:outline-none"
                >
                  <option disabled value="">-- Танланг --</option>

                  <option v-for="item in tuman" :key="item" :value="item">
                    {{ item }}
                  </option>
                </select>

                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg class="fill-current h-4 w-4" viewBox="0 0 20 20">
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Яшаш манзили -->
            <div class="w-full leading-loose">
              <label class="block text-sm text-neutral-700 font-semibold">
                Яшаш манзили
              </label>

              <input
                v-model="address"
                class="w-full px-5 py-1 text-neutral-800 rounded border-2 border-neutral-200 hover:border-neutral-300"
                placeholder="Манзил"
                type="text"
              />
            </div>
          </div>
          
          <button
            @click.prevent="nextPage"
            :disabled="disabled"
            :class="
              !disabled
                ? 'mt-5 w-full bg-neutral-300 py-2 rounded-lg uppercase text-neutral-500 hover:bg-primary-400 hover:bg-blue-500 duration-250 hover:text-white focus:outline-none'
                : 'mt-5 w-full bg-red-400 py-2 rounded-lg uppercase text-white   '
            "
          >
            {{ disabled ? "Кутинг" : "Олдинга" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
