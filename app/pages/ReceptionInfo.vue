<script setup>
import { mamuriySudViloyatlari, oliySudLavozimlari } from "~/data";
import { receptionInfo } from "~/store/ReceptionInfo";

const useReceptionInfo = receptionInfo();
const toast = useToast();

const disabled = ref(false);


const nextPage = () => {
  const required = [
    useReceptionInfo.selectedRegion,
    useReceptionInfo.selectedCourt,
    useReceptionInfo.SUD_YONALISHI,
    useReceptionInfo.selectedLavozim,
    useReceptionInfo.selectedRaxbar,
    useReceptionInfo.form.fullName.trim(),
    useReceptionInfo.form.lastName.trim(),
    useReceptionInfo.form.midName.trim(),
    useReceptionInfo.form.date,
    useReceptionInfo.form.workNum,
  ];
  if (
    required.some((v) => !v) ||
    !useReceptionInfo.form.agree1 ||
    !useReceptionInfo.form.agree2
  ) {
    disabled.value = true;
    setTimeout(() => {
      disabled.value = false;
    }, 5000);
    return toast.error({
      message: "Барча майдонларни тулдиринг!",
    });
  }

  navigateTo("/appealCassationCourtDate");
};
</script>

<template>
  <!-- page 3 -->

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
            class="-mx-5 p-5 -mt-5 mb-5 bg-neutral-100 text-neutral-700 font-bold text-xl"
          >
            Қабул ҳақида маълумотлар
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div class="w-full leading-loose">
              <label class="block text-sm text-neutral-700 font-semibold"
                >Кимнинг қабулига ёзилмоқчисиз? (*)</label
              >
              <div class="inline-block relative w-full">
                <select
                  v-model="useReceptionInfo.selectedLavozim"
                  class="block appearance-none w-full bg-white text-neutral-800 rounded border-2 border-neutral-200 hover:border-neutral-300 px-4 py-2 pr-8 leading-tight focus:outline-none"
                >
                  <option value="" disabled="">-- Танланг --</option>
                  <option
                    :key="item"
                    :value="item"
                    v-for="item in oliySudLavozimlari"
                  >
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
            <div class="w-full leading-loose">
              <label class="block text-sm text-neutral-700 font-semibold"
                >Раҳбар Ф.И.Ш</label
              >
              <div class="inline-block relative w-full">
                <select
                :disabled="!useReceptionInfo.selectedLavozim"
                  v-model="useReceptionInfo.selectedRaxbar"
                  class="block appearance-none w-full bg-white text-neutral-800 rounded border-2 border-neutral-200 hover:border-neutral-300 px-4 py-2 pr-8 leading-tight focus:outline-none"
                >
                  <option value="" disabled>-- Танланг --</option>

                  <option
                    v-for="item in useReceptionInfo.raxbar"
                    :key="item"
                    :value="item"
                  >
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
            <div class="w-full leading-loose">
              <label class="block text-sm text-neutral-700 font-semibold"
                >Суд йўналишлари (**)</label
              >
              <div class="inline-block relative w-full">
                <select
                  v-model="useReceptionInfo.SUD_YONALISHI"
                  class="block appearance-none w-full bg-white text-neutral-800 rounded border-2 border-neutral-200 hover:border-neutral-300 px-4 py-2 pr-8 leading-tight focus:outline-none"
                >
                  <option value="" disabled="">-- Танланг --</option>
                  <option class="text-neutral-800">Жиноят ишлари бўйича</option>
                  <option class="text-neutral-800">
                    Маъмурий ишлар бўйича
                  </option>
                  <option class="text-neutral-800">
                    Фуқаролик ишлари бўйича
                  </option>
                  <option class="text-neutral-800">
                    Иқтисодий ишлар бўйича
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
            <div class="w-full leading-loose">
              <label class="block text-sm text-neutral-700 font-semibold"
                >Иш бўйича тарафлар</label
              >
              <div class="inline-block relative w-full">
                <select
                  v-model="useReceptionInfo.ISH_BOYICHA_TARAFLAR"
                  class="block appearance-none w-full bg-white text-neutral-800 rounded border-2 border-neutral-200 hover:border-neutral-300 px-4 py-2 pr-8 leading-tight focus:outline-none"
                  name="party"
                  style=""
                >
                  <option value="" disabled="">-- Танланг --</option>
                  <option class="text-neutral-800">Маъмурий ҳуқуқбузар</option>
                  <option class="text-neutral-800">Жабрланувчи</option>
                  <option class="text-neutral-800">Бошқа шахс</option>
                  <option class="text-neutral-800">Даъвогар</option>
                  <option class="text-neutral-800">Жавобгар</option>
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
            <div
              v-show="useReceptionInfo.ISH_BOYICHA_TARAFLAR"
              class="w-full leading-loose"
            >
              <label class="block text-sm text-neutral-700 font-semibold"
                >Исми</label
              ><input
                v-model="useReceptionInfo.form.fullName"
                class="w-full px-5 py-1 text-neutral-800 rounded border-2 border-neutral-200 hover:border-neutral-300"
                placeholder="Пулат"
                type="text"
                name="partyFirstname"
              />
            </div>
            <div
              v-show="useReceptionInfo.ISH_BOYICHA_TARAFLAR"
              class="w-full leading-loose"
            >
              <label class="block text-sm text-neutral-700 font-semibold"
                >Фамилияси</label
              ><input
                v-model="useReceptionInfo.form.lastName"
                class="w-full px-5 py-1 text-neutral-800 rounded border-2 border-neutral-200 hover:border-neutral-300"
                placeholder="Пулатов"
                type="text"
                name="partyLastname"
              />
            </div>
            <div
              v-show="useReceptionInfo.ISH_BOYICHA_TARAFLAR"
              class="w-full leading-loose"
            >
              <label class="block text-sm text-neutral-700 font-semibold"
                >Шарифи</label
              ><input
                v-model="useReceptionInfo.form.midName"
                class="w-full px-5 py-1 text-neutral-800 rounded border-2 border-neutral-200 hover:border-neutral-300"
                placeholder="Пулатович"
                type="text"
                name="partyMiddlename"
              />
            </div>
            <div
              class="w-full leading-loose"
            >
              <label class="block text-sm text-neutral-700 font-semibold"
                >Иш рақамини</label
              ><input
                v-model="useReceptionInfo.form.workNum"
                @input="useReceptionInfo.form.workNum = useReceptionInfo.form.workNum.replace(/\D/g,'')"
                class="w-full px-5 py-1 text-neutral-800 rounded border-2 border-neutral-200 hover:border-neutral-300"
                placeholder="####"
                type="text"
              />
            </div>

            <div class="w-full leading-loose">
              <label class="block text-sm text-neutral-700 font-semibold"
                >Иштирок этиш тартиби</label
              >
              <div class="inline-block relative w-full">
                <select
                  v-model="useReceptionInfo.ISHTROK_ETISH_TARTIBI"
                  class="block appearance-none w-full bg-white text-neutral-800 rounded border-2 border-neutral-200 hover:border-neutral-300 px-4 py-2 pr-8 leading-tight focus:outline-none"
                >
                  <option value="" disabled="">-- Танланг --</option>
                  <option class="text-neutral-800">Видеоконференцалоқа</option>
                  <option class="text-neutral-800">Бевосита идорада</option>
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
            <div class="w-full leading-loose">
              <label class="block text-sm text-neutral-700 font-semibold"
                >Худуд</label
              >
              <div class="inline-block relative w-full">
                <select
                  v-model="useReceptionInfo.selectedRegion"
                  class="block appearance-none w-full bg-white text-neutral-800 rounded border-2 border-neutral-200 hover:border-neutral-300 px-4 py-2 pr-8 leading-tight focus:outline-none"
                >
                  <option value="" disabled>-- Танланг --</option>

                  <option
                    v-for="item in mamuriySudViloyatlari"
                    :key="item"
                    :value="item"
                  >
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
            <div class="w-full leading-loose">
              <label class="block text-sm text-neutral-700 font-semibold"
                >Биринчи истанция судининг номи</label
              >
              <div class="inline-block relative w-full">
                <select
                :disabled="!useReceptionInfo.selectedRegion"
                  v-model="useReceptionInfo.selectedCourt"
                  class="block appearance-none w-full bg-white text-neutral-800 rounded border-2 border-neutral-200 hover:border-neutral-300 px-4 py-2 pr-8 leading-tight focus:outline-none"
                >
                  <option value="" disabled>-- Танланг --</option>

                  <option
                    v-for="item in useReceptionInfo.arr"
                    :key="item"
                    :value="item"
                  >
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
            <div class="w-full leading-loose flex flex-col">
              <label class="block text-sm text-neutral-700 font-semibold"
                >Иш кўрилган сана</label
              >
              <div class="react-datepicker-wrapper">
                <div class="react-datepicker__input-container">
                  <input
                    v-model="useReceptionInfo.form.date"
                    type="date"
                    :max="new Date().toISOString().split('T')[0]"
                    class="w-full px-5 py-1 text-neutral-800 rounded border-2 border-neutral-200 hover:border-neutral-300"
                  />
                </div>
              </div>
            </div>
            <div
              v-show="useReceptionInfo.selectedLavozim"
              class="flex flex-col border-2 rounded-lg border-amber-300 bg-amber-100 p-5 space-y-4 col-start-1 col-end-2 sm:col-end-3"
            >
              <h1 class="text-lg font-bold text-neutral-800">Эслатма (*)</h1>
              <p class="text-neutral-700 text-base">
                {{
                  useReceptionInfo.selectedLavozim === "Олий суд раиси"
                    ? "Олий суд раиси қабулига кириш учун, назорат тартибидаги шикоятни, дастлаб Олий суд судьяси томонидан ўрганилиб тегишли ажрим чиқарилган бўлиши ва Олий суд раис ўринбосари қабулида берилган шикоят аризасига Олий суд раиси ўринбосари томонидан тегишли жавоб хати чиқарилган бўлиши лозим"
                    : "Олий суд раис ўринбосари қабулига кириш учун, назорат тартибидаги шикоятни, дастлаб Олий суд судьяси томонидан ўрганилиб тегишли ажрим чиқарилган бўлиши лозим."
                }}
              </p>
              <div class="flex gap-3">
                <input
                  v-model="useReceptionInfo.form.agree1"
                  id="d"
                  type="checkbox"
                  class="ui-checkbox"
                />
                <label
                  for="d"
                  class="flex justify-start items-center cursor-pointer"
                >
                  <div class="select-none text-base text-neutral-800">
                    Ўқиб чиқдим!
                  </div></label
                >
              </div>
            </div>
            <div
              v-show="useReceptionInfo.SUD_YONALISHI"
              class="flex flex-col border-2 rounded-lg border-amber-300 bg-amber-100 p-5 space-y-4 col-start-1 col-end-2 sm:col-end-3"
            >
              <h1 class="text-lg font-bold text-neutral-800">Эслатма (**)</h1>
              <p class="text-neutral-700 text-base">
                {{
                  useReceptionInfo.SUD_YONALISHI === "Маъмурий ишлар бўйича"
                    ? "Ўзбекистон Республикаси МСИЮТКнинг 249-моддасига мувофиқ, ишда иштирок этувчи шахслар (аризачи, мансабдор шахс, уларнинг ишончли вакиллари ва манфаатдор шахслар), ишда иштирок этишга жалб қилинмаган, аммо ҳуқуқлари ва мажбуриятлари тўғрисида суднинг ҳал қилув қарори қабул қилган шахслар томонидан, шунингдек Ўзбекистон Республикаси Президенти ҳузуридаги Тадбиркорлик субъектларининг ҳуқуқлари ва қонуний манфаатларини ҳимоя қилиш бўйича вакил томонидан назорат тартибида шикоят қилиниши мумкин, бундан тадбиркорлик фаолияти билан боғлиқ бўлмаган суд ишлари мустасно."
                    : useReceptionInfo.SUD_YONALISHI ===
                        "Иқтисодий ишлар бўйича"
                      ? "Ишда иштирок этувчи шахслар (даъвогар, жавобгар, уларнинг ишончли вакиллари ва манфаатдор шахслар), шунингдек ишда иштирок этишга жалб қилинмаган, аммо ҳуқуқлари ва мажбуриятлари ҳақидаги масала суд томонидан ҳал этилган шахслар суд ҳужжатининг қонуний, асосли ва адолатли эканлигини текшириш ҳақидаги шикоят(ариза) билан қонунда белгиланган тартибда мурожаат қилишга ҳақли"
                      : "Ўзбекистон Республикаси ФПКнинг 373-моддасига мувофиқ, ишда иштирок этувчи шахслар (даъвогар, жавобгар, уларнинг ишончли вакиллари ва манфаатдор шахслар), шунингдек ишда иштирок этишга жалб қилинмаган, аммо ҳуқуқ ва мажбуриятлари ҳақидаги масала суд томонидан ҳал этилган шахслар суд ҳужжатининг қонуний, асосли ва адолатли эканлигини текшириш ҳақидаги шикоят (ариза) билан қонунда белгиланган тартибда мурожаат қилишга ҳақли."
                }}
              </p>
              <p class="text-neutral-700 text-base">
                {{
                  useReceptionInfo.SUD_YONALISHI === "Маъмурий ишлар бўйича"
                    ? "Маъмурий ҳуқуқбузарлик тўғрисидаги иш бўйича ўзига нисбатан суднинг қарори чиқарилган шахс, жабрланувчи, уларнинг қонуний вакиллари, адвокат, шунингдек маъмурий ҳуқуқбузарлик тўғрисида баённома тузган орган апелляция ёки кассация инстанция судининг қарори устидан назорат тартибида шикоят беришга, прокурор эса протест келтиришга ҳақли."
                    : ""
                }}
              </p>
              <div class="flex gap-3">
                <input
                  v-model="useReceptionInfo.form.agree2"
                  id="l"
                  type="checkbox"
                  class="ui-checkbox"
                />
                <label
                  for="l"
                  class="flex justify-start items-center cursor-pointer"
                >
                  <div class="select-none text-base text-neutral-800">
                    Ўқиб чиқдим!
                  </div></label
                >
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

<style scoped>
.ui-checkbox {
  --primary-color: #1677ff;
  --secondary-color: #fff;
  --primary-hover-color: #4096ff;
  /* checkbox */
  --checkbox-diameter: 20px;
  --checkbox-border-radius: 5px;
  --checkbox-border-color: #d9d9d9;
  --checkbox-border-width: 1px;
  --checkbox-border-style: solid;
  /* checkmark */
  --checkmark-size: 1.2;
}

.ui-checkbox,
.ui-checkbox *,
.ui-checkbox *::before,
.ui-checkbox *::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.ui-checkbox {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: var(--checkbox-diameter);
  height: var(--checkbox-diameter);
  border-radius: var(--checkbox-border-radius);
  background: var(--secondary-color);
  border: var(--checkbox-border-width) var(--checkbox-border-style)
    var(--checkbox-border-color);
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  cursor: pointer;
  position: relative;
}

.ui-checkbox::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-box-shadow: 0 0 0 calc(var(--checkbox-diameter) / 2.5)
    var(--primary-color);
  box-shadow: 0 0 0 calc(var(--checkbox-diameter) / 2.5) var(--primary-color);
  border-radius: inherit;
  opacity: 0;
  -webkit-transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
  -o-transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
  transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
}

.ui-checkbox::before {
  top: 40%;
  left: 50%;
  content: "";
  position: absolute;
  width: 4px;
  height: 7px;
  border-right: 2px solid var(--secondary-color);
  border-bottom: 2px solid var(--secondary-color);
  -webkit-transform: translate(-50%, -50%) rotate(45deg) scale(0);
  -ms-transform: translate(-50%, -50%) rotate(45deg) scale(0);
  transform: translate(-50%, -50%) rotate(45deg) scale(0);
  opacity: 0;
  -webkit-transition:
    all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6),
    opacity 0.1s;
  -o-transition:
    all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6),
    opacity 0.1s;
  transition:
    all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6),
    opacity 0.1s;
}

/* actions */

.ui-checkbox:hover {
  border-color: var(--primary-color);
}

.ui-checkbox:checked {
  background: var(--primary-color);
  border-color: transparent;
}

.ui-checkbox:checked::before {
  opacity: 1;
  -webkit-transform: translate(-50%, -50%) rotate(45deg)
    scale(var(--checkmark-size));
  -ms-transform: translate(-50%, -50%) rotate(45deg)
    scale(var(--checkmark-size));
  transform: translate(-50%, -50%) rotate(45deg) scale(var(--checkmark-size));
  -webkit-transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
  -o-transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
  transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
}

.ui-checkbox:active:not(:checked)::after {
  -webkit-transition: none;
  -o-transition: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  transition: none;
  opacity: 1;
}
</style>
