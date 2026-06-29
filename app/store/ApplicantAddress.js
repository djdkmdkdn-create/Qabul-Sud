import { defineStore } from "pinia";
import {
  andijonTumanlari,
  buxoroTumanlari,
  fargonaTumanlari,
  jizzaxTumanlari,
  namanganTumanlari,
  navoiyTumanlari,
  qashqadaryoTumanlari,
  samarqandTumanlari,
  sirdaryoTumanlari,
  surxondaryoTumanlari,
} from "~/data";

export const useApplicantAddress = defineStore(
  "ApplicantAddress",
  () => {
    const tuman = ref([]);
    const viloyat = ref("");
    const district = ref("");
    const address = ref("");

    const change = (item) => {
      district.value = "";

      if (item === "Andijon viloyati")
        tuman.value = andijonTumanlari;
      else if (item === "Buxoro viloyati")
        tuman.value = buxoroTumanlari;
      else if (item === "Farg‘ona viloyati")
        tuman.value = fargonaTumanlari;
      else if (item === "Jizzax viloyati")
        tuman.value = jizzaxTumanlari;
      else if (item === "Namangan viloyati")
        tuman.value = namanganTumanlari;
      else if (item === "Qashqadaryo viloyati")
        tuman.value = qashqadaryoTumanlari;
      else if (item === "Samarqand viloyati")
        tuman.value = samarqandTumanlari;
      else if (item === "Sirdaryo viloyati")
        tuman.value = sirdaryoTumanlari;
      else if (item === "Surxondaryo viloyati")
        tuman.value = surxondaryoTumanlari;
      else if (item === "Navoiy viloyati")
        tuman.value = navoiyTumanlari;
      else tuman.value = [];
    };

    return {
      tuman,
      viloyat,
      district,
      address,
      change,
    };
  }
);