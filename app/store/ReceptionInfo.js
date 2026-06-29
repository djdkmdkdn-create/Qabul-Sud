import {
  ref,
  computed
} from "vue";
import {
  samarqandViloyatiMamuriySudlari,
  toshkentViloyatiMamuriySudlari,
  andijonViloyatiMamuriySudlari,
  navoiyViloyatiMamuriySudlari,
  surxondaryoViloyatiMamuriySudlari,
  namanganViloyatiMamuriySudlari,
  sirdaryoViloyatiMamuriySudlari,
  xorazmViloyatiMamuriySudlari,
  fargonaViloyatiMamuriySudlari,
  qoraqalpogistonMamuriySudlari,
  toshkentShaxarMamuriySudlari,
  buxoroViloyatiIqtisodiySudlari,
  jizzaxViloyatiIqtisodiySudlari,
  qashqadaryoViloyatiIqtisodiySudlari,
} from "~/data";

export const receptionInfo = defineStore('receptionInfo', () => {

  const selectedRegion = ref("");
  const selectedCourt = ref("");
  const selectedRaxbar = ref("")
  const selectedLavozim = ref("")
  const ISH_BOYICHA_TARAFLAR = ref('')
  const SUD_YONALISHI = ref('')
  const ISHTROK_ETISH_TARTIBI = ref('')
  const sudlar = {
    "Қашқадарё вилояти": qashqadaryoViloyatiIqtisodiySudlari,
    "Тошкент шахар": toshkentShaxarMamuriySudlari,
    "Андижон вилояти": andijonViloyatiMamuriySudlari,
    "Навоий вилояти": navoiyViloyatiMamuriySudlari,
    "Сурхондарё вилояти": surxondaryoViloyatiMamuriySudlari,
    "Наманган вилояти": namanganViloyatiMamuriySudlari,
    "Сирдарё вилояти": sirdaryoViloyatiMamuriySudlari,
    "Самарқанд вилояти": samarqandViloyatiMamuriySudlari,
    "Хоразм вилояти": xorazmViloyatiMamuriySudlari,
    "Фарғона вилояти": fargonaViloyatiMamuriySudlari,
    "Тошкент вилояти": toshkentViloyatiMamuriySudlari,

    "Қорақалпоғистон Республикаси": qoraqalpogistonMamuriySudlari,
    "Бухоро вилояти": buxoroViloyatiIqtisodiySudlari,
    "Жиззах вилояти": jizzaxViloyatiIqtisodiySudlari,
  };

  const arr = computed(() => {
    return sudlar[selectedRegion.value] || [];
  });
  watch(
  arr,
  (newArr) => {
    selectedCourt.value = newArr[0] || '';
  },
  { immediate: true }
);



  const sudlarLavozimi = {
    "Олий суд раиси": ['Б.Исламов'],
    "Жиноят ишлари бўйича раис ўринбосари": ['А.Усманов'],
    "Фуқаролик ишлари бўйича раис ўринбосари": ['О.Исмаилов'],
    "Маъмурий ишлар бўйича раиснинг 1-ўринбосари": ['Ш.Полванов'],
    "Иқтисодий ишлари бўйича раис ўринбосари": ['Ш.Полванов'],
  };

  const raxbar = computed(() => {
    return sudlarLavozimi[selectedLavozim.value] || [];
  });

  watch(
    selectedLavozim,
    (newValue) => {
      selectedRaxbar.value =
        sudlarLavozimi[newValue]?. [0] || '';
    }, {
      immediate: true
    }
  );

  const form = {
    fullName: "",
    lastName: "",
    midName: "",
    date: '',
    workNum: null,
    agree1: false,
    agree2: false,
  };
  return {
    arr,
    selectedCourt,
    selectedRegion,
    selectedLavozim,
    raxbar,
    selectedRaxbar,
    ISHTROK_ETISH_TARTIBI,
    ISH_BOYICHA_TARAFLAR,
    SUD_YONALISHI,
    form
  }
})