import {
    ref
} from "vue";
export const supremeCourtRulingDate = defineStore('supremeCourtRulingDate', () => {

    
    const appealNumber = ref("");
    const date = ref('');
   

    return {appealNumber,date}
})