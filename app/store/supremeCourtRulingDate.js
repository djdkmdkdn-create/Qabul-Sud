import {
    ref
} from "vue";
export const supremeCourtRulingDate = defineStore('supremeCourtRulingDate', () => {

    
    const appealNumber = ref("");
    const date = ref(new Date().toISOString().split('T')[0]);
   

    return {appealNumber,date}
})