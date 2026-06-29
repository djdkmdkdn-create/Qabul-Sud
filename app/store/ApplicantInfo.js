export const useApplicantInfo = defineStore('applicant', () => {
  const applicant = ref({
    lastName: '',
    firstName: '',
    middleName: '',
    phone: '',
    email: ''
  })

  const validate = () => {
    const isValid = Object.values(applicant.value).every(Boolean)
   
    return isValid
  }

  return {
    applicant,
    validate
  }
})