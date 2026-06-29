<script setup>
import { useApplicantInfo } from "~/store/ApplicantInfo";
const toast = useToast();
const disabled = ref(false);
const useInfo = useApplicantInfo();
const nextPage = () => {
  if (!useInfo.validate()) {
    disabled.value = true;

    setTimeout(() => {
      disabled.value = false;
    }, 5000);

    return toast.error({
      message: "Барча майдонларни тулдиринг!",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^998\d{9}$/;
  if (!emailRegex.test(useInfo.applicant.email)) {
    return toast.error({
      message: "Илтимос, электрон почта манзилини тўғри киритинг.",
    });
  }
  if (!phoneRegex.test(useInfo.applicant.phone)) {
  return toast.error({
    message: "Телефон рақамини тўғри киритинг."
  });
}
 
  navigateTo("/ApplicantAddress");
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
            <div class="h-1 w-10 bg-neutral-400"></div>
          </div>
          <div class="flex h-10 justify-center items-center my-4">
            <div
              class="select-none w-10 h-10 flex text-neutral-400 border-2 border-neutral-400 rounded-full justify-center items-center"
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

        <form
          class="flex flex-col p-5 overflow-hidden mx-auto bg-white rounded-lg border-2 border-neutral-200 max-w-2xl"
        >
          <p
            class="-mx-5 p-5 -mt-5 mb-5 bg-neutral-100 text-neutral-700 font-bold text-xl"
          >
            Ариза юборувчи ҳақида маълумотлар
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div class="w-full leading-loose">
              <label class="block text-sm text-neutral-700 font-semibold"
                >Исми</label
              >
              <input
                v-model="useInfo.applicant.firstName"
                class="w-full px-5 py-1 text-neutral-800 rounded border-2 border-neutral-200 hover:border-neutral-300"
                placeholder="Пулат"
                required
                type="text"
                name="firstname"
              />
            </div>
            <div class="w-full leading-loose">
              <label class="block text-sm text-neutral-700 font-semibold"
                >Фамилияси</label
              >
              <input
                v-model="useInfo.applicant.lastName"
                class="w-full px-5 py-1 text-neutral-800 rounded border-2 border-neutral-200 hover:border-neutral-300"
                placeholder="Пулатов"
                required
                type="text"
                name="lastname"
              />
            </div>
            <div class="w-full leading-loose">
              <label class="block text-sm text-neutral-700 font-semibold"
                >Шарифи</label
              >
              <input
                v-model="useInfo.applicant.middleName"
                class="w-full px-5 py-1 text-neutral-800 rounded border-2 border-neutral-200 hover:border-neutral-300"
                placeholder="Пулатович"
                type="text"
                required
                name="middlename"
              />
            </div>
            <div class="w-full leading-loose">
              <label class="block text-sm text-neutral-700 font-semibold"
                >Телефон рақами</label
              >
              <input
                v-model="useInfo.applicant.phone"
                class="w-full px-5 py-1 text-neutral-800 rounded border-2 border-neutral-200 hover:border-neutral-300"
                placeholder="998XXXXXXXX"
                type="tel"
                @input="useInfo.applicant.phone = useInfo.applicant.phone.replace(/\D/g, '').slice(0, 12)"
                name="phone"
              />
            </div>
            <div class="w-full leading-loose">
              <label class="block text-sm text-neutral-700 font-semibold"
                >Электрон почта манзили</label
              >
              <input
                required
                v-model="useInfo.applicant.email"
                class="w-full px-5 py-1 text-neutral-800 rounded border-2 border-neutral-200 hover:border-neutral-300"
                placeholder="mail@example.com"
                type="email"
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
        </form>
      </div>
    </div>
  </div>
</template>
