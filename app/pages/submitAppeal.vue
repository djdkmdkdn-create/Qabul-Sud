<script setup>
import { receptionInfo } from '~/store/ReceptionInfo';

const description = ref("");
const files = ref([]);
const toast = useToast();
const disabled = ref(false);
const succes=ref(false)
const handleFile = (e) => {
  const selectedFiles = Array.from(e.target.files);

  const maxSize = 20 * 1024 * 1024; // 20 МБ

  const totalSize = selectedFiles.reduce(
    (sum, file) => sum + file.size,
    0
  );

  if (totalSize > maxSize) {
    toast.error({
      message:
        "Юкланадиган файллар ҳажми 20 МБ дан ошмаслиги керак",
    });

    e.target.value = "";
    files.value = [];
    return;
  }

  files.value = selectedFiles;
};
const useReceptionInfo=receptionInfo()
const finish = () => {
  if (!description.value.trim() || files.value.length === 0) {
    disabled.value = true;

    setTimeout(() => {
      disabled.value = false;
    }, 5000);

    return toast.error({
      message:
        "Барча майдонларни тўлдиринг ва файл бириктиринг!",
    });
  }
    succes.value=true  
};
</script>

<template>
  <!-- page 6 -->

  <div class="pb-16 w-full bg-neutral-100">
    
      <Transition name="modal">
  <div
    v-if="succes"
    class="fixed top-0 left-0 z-10 flex h-screen w-full items-center justify-center backdrop-blur-sm"
  >
    <div
      class="rounded-2xl border border-green-200 bg-linear-to-br from-green-50 to-white p-8 shadow-lg"
    >
   <div class="flex flex-col items-center text-center">
    <div
      class="flex h-20 w-20 items-center justify-center rounded-full bg-green-100"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10 text-green-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2.5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>

    <h2 class="mt-6 text-3xl font-bold text-green-700">
      Мурожаат муваффақиятли юборилди
    </h2>

    <p class="mt-4 max-w-xl text-neutral-600 leading-7">
      Сизнинг мурожаатингиз қабул қилинди ва белгиланган тартибда
      кўриб чиқиш учун юборилди.
    </p>

    <div
      class="mt-8 w-full rounded-xl border border-neutral-200 bg-white p-5"
    >
      <div
        class="flex flex-col gap-3 sm:flex-row sm:justify-between"
      >
        <span class="text-neutral-500">
          Мурожаат ҳолати
        </span>

        <span
          class="font-semibold text-green-600"
        >
          ✓ Қабул қилинди
        </span>
      </div>

      <div
        class="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-between"
      >
        <span class="text-neutral-500">
          Юборилган сана
        </span>

        <span class="font-semibold">
          {{ new Date().toLocaleString('uz-UZ') }}
        </span>
      </div>
    </div>

    <div
      class="mt-8 rounded-xl bg-blue-50 border border-blue-100 p-4 text-blue-700"
    >
      Илтимос, мурожаатингиз кўриб чиқилиши учун маълум вақт кутинг.
      Зарур ҳолларда сиз билан қўшимча боғланилади.
    </div>

    <button
      @click="navigateTo('/')"
      class="mt-8 rounded-xl bg-blue-500 px-8 py-3 font-semibold text-white duration-200 hover:bg-blue-600"
    >
      Бош саҳифага қайтиш
    </button>
  </div>
    </div>
  </div>
</Transition>
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
            <div class="h-1 w-10 bg-blue-400"></div>
          </div>

          <div class="flex h-10 justify-center items-center my-4">
            <div
              class="select-none w-10 h-10 flex text-neutral-400 border-2 border-blue-400 rounded-full justify-center items-center"
            >
              6
              
            </div>
          </div>
        </div>

        <div
          class="flex flex-col p-5 overflow-hidden mx-auto bg-white rounded-lg border-2 border-neutral-200 w-full"
        >
          <p
            class="-mx-5 p-5 -mt-5 mb-5 bg-neutral-100 text-neutral-700 font-bold text-xl"
          >
            Мурожаатни юбориш
          </p>

          <div class="flex w-full h-full flex-col">
            <div class="w-full relative leading-loose">
              <label class="block text-sm text-neutral-700 font-semibold">
                Мурожаатнинг қисқача мазмуни
              </label>

              <textarea
                v-model="description"
                maxlength="300"
                rows="3"
                name="description"
                class="w-full px-4 py-2 text-neutral-800 rounded border border-neutral-300 resize-none"
              ></textarea>

              <p class="text-sm absolute   text-neutral-500 mt-1">
                {{ description.length }}/300
              </p>
            </div>

            <div class="w-full mt-8">
              <label class="block text-sm text-neutral-700 font-semibold mb-2">
                Ариза ва ишга доир тегишли ҳужжатларни бириктиринг
              </label>

              <label
                class="w-full flex flex-col items-center px-2 py-2 bg-white text-neutral-600 rounded-lg border-2 border-neutral-200 cursor-pointer hover:bg-gray-400 duration-200 hover:text-white hover:border-opacity-0"
              >
                <span
                  class="mt-2 text-sm leading-normal flex-col flex justify-center items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3em"
                    height="3em"
                    viewBox="0 0 1024 1024"
                  >
                    <path d="M0 0h1024v1024H0z" fill="none" />
                    <path
                      fill="currentColor"
                      d="M544 864V672h128L512 480L352 672h128v192H320v-1.6c-5.4.3-10.5 1.6-16 1.6A240 240 0 0 1 64 624a239 239 0 0 1 212.6-237.2A240 240 0 0 1 512 192a240 240 0 0 1 235.5 194.8A239 239 0 0 1 959.9 624a240 240 0 0 1-240 240c-5.3 0-10.5-1.3-16-1.6v1.6z"
                    />
                  </svg>
                  Файлларни танлаш
                </span>

                <input
                  @change="handleFile"
                  type="file"
                  multiple
                  class="hidden"
                />
              </label>
            </div>
          </div>

          <button
            @click.prevent="finish"
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
<style scoped>

.modal-enter-active,
.modal-leave-active {
  transition: all 0.35s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.modal-enter-to,
.modal-leave-from {
  opacity: 1;
  transform: scale(1);
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

.modal-enter-to,
.modal-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>