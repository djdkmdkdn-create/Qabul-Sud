<script setup>
import { supremeCourtRulingDate } from '~/store/supremeCourtRulingDate';

const toast = useToast();

const disabled = ref(false);

const useDate=supremeCourtRulingDate()

const nextPage = () => {
  const required = [
    useDate.appealNumber,
    useDate.date,
  ];
  if (required.some((v) => !v)) {
    disabled.value = true;
    setTimeout(() => {
      disabled.value = false;
    }, 5000);
    return toast.error({
      message: "Барча майдонларни тулдиринг!",
    });
  }

  navigateTo("/submitAppeal");
};
</script>

<template>
  <!-- page 5 -->

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
            <div class="h-1 w-10 bg-blue-400"></div>
          </div>

          <div class="flex h-10 justify-center items-center my-4">
            <div
              class="select-none w-10 h-10 flex text-neutral-400 border-2 border-blue-400 rounded-full justify-center items-center"
            >
              3
            </div>
            <div class="h-1 w-10 bg-blue-400"></div>
          </div>

          <div class="flex h-10 justify-center items-center my-4">
            <div
              class="select-none w-10 h-10 flex text-neutral-400 border-2 border-blue-400 rounded-full justify-center items-center"
            >
              4
            </div>
            <div class="h-1 w-10 bg-blue-400"></div>
          </div>

          <div class="flex h-10 justify-center items-center my-4">
            <div
              class="select-none w-10 h-10 flex text-neutral-400 border-2 border-blue-400 rounded-full justify-center items-center"
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
            class="-mx-5 p-5 -mt-5 mb-5 bg-neutral-100 text-neutral-700 font-bold text-xl"
          >
            Олий суд судьяси томонидан чиқарилган ажрим рақами ва санаси
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div class="w-full leading-loose">
              <label class="block text-sm text-neutral-700 font-semibold">
                Ажрим рақами
              </label>

              <input
                v-model="useDate.appealNumber"
                @input="useDate.appealNumber = useDate.appealNumber.replace(/\D/g,'')"
                class="w-full px-5 py-1 text-neutral-800 rounded border-2 border-neutral-200 hover:border-neutral-300"
                placeholder="Киритинг"
                type="text"
              />
            </div>

            <div class="w-full leading-loose flex flex-col">
              <label class="block text-sm text-neutral-700 font-semibold">
                Ажрим санаси
              </label>

              <div class="react-datepicker-wrapper">
                <div class="react-datepicker__input-container">
                  <input
                    v-model="useDate.date"
                      type="date"
                    :max="useDate.date"
                    class="w-full px-5 py-1 text-neutral-800 rounded border-2 border-neutral-200 hover:border-neutral-300"
                  />
                </div>
              </div>
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
