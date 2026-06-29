import { ref, computed, watch } from "vue";
import {
qashqadaryoShaharJinoyatSudlari,
tashkentShaharJinoyatSudlari,
andijonViloyatiJinoyatSudlari,
navoiyViloyatiJinoyatSudlari,
surxondaryoViloyatiJinoyatSudlari,
namanganViloyatiJinoyatSudlari,
sirdaryoViloyatiJinoyatSudlari,
samarqandViloyatiJinoyatSudlari,
xorazmViloyatiJinoyatSudlari,
fargonaViloyatiJinoyatSudlari,
toshkentViloyatiSudlari,
} from "~/data";
export const useDate=defineStore('useDate',()=>{

const jinoyatSudlari = {
  "Қашқадарё вилояти": qashqadaryoShaharJinoyatSudlari,
  "Тошкент шахар": tashkentShaharJinoyatSudlari,
  "Андижон вилояти": andijonViloyatiJinoyatSudlari,
  "Навоий вилояти": navoiyViloyatiJinoyatSudlari,
  "Сурхондарё вилояти": surxondaryoViloyatiJinoyatSudlari,
  "Наманган вилояти": namanganViloyatiJinoyatSudlari,
  "Сирдарё вилояти": sirdaryoViloyatiJinoyatSudlari,
  "Самарқанд вилояти": samarqandViloyatiJinoyatSudlari,
  "Хоразм вилояти": xorazmViloyatiJinoyatSudlari,
  "Фарғона вилояти": fargonaViloyatiJinoyatSudlari,
  "Тошкент вилояти": toshkentViloyatiSudlari,
};

const selectedRegion = ref("");
const selectedSud = ref("");
const selectedDate = ref('');

const regions = Object.keys(jinoyatSudlari);
const sud = computed(() => {
  return jinoyatSudlari[selectedRegion.value] || [];
});

watch(selectedRegion, (newValue) => {
  const sudlar = jinoyatSudlari[newValue] || [];
  selectedSud.value = sudlar[0] || "";
});

return {selectedDate,regions,sud,selectedRegion,selectedSud}
})