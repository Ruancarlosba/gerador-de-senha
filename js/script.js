
      const inputEl = document.querySelector("#password")
      const upperCaseCheckEl = document.querySelector("#Uppercase-check")
      const numberCaseCheckEl = document.querySelector("#Number-check")
      const symbolCaseCheckEl = document.querySelector("#Symbol-check")

      let passwordLength = 16

      function generatePassword() {
        let chars =
          "abcdefghjkmnpqrstuvwxyz"

          const upperCaseChars = "ABCDEFGHJKLMNPQRSTUVWXYZ"
          const numberChars = "123456789"
          const symbolChars = "?!@&*()[]"

          if(upperCaseCheckEl.checked) {
            chars+= upperCaseChars
          }
          
          if(numberCaseCheckEl.checked) {
            chars+= numberChars
          }

          if(symbolCaseCheckEl.checked) {
            chars+= symbolChars
          }

        let password = ""

        for (let i = 0; i < passwordLength; i++) {
          const randomNumber = Math.floor(Math.random() * chars.length)
          password += chars.substring(randomNumber, randomNumber + 1)
        }

        inputEl.value = password
      }

      function copy() {
        navigator.clipboard.writeText(inputEl.value)
      }

      const passwordLengthEl = document.querySelector("#password-length")
      passwordLengthEl.addEventListener("input", function () {
        passwordLength = passwordLengthEl.value
        generatePassword()
      })

      upperCaseCheckEl.addEventListener("click", generatePassword)
      numberCaseCheckEl.addEventListener("click", generatePassword)
      symbolCaseCheckEl.addEventListener("click", generatePassword)

      document.querySelector("#copy-1").addEventListener("click", copy)
      document.querySelector("#copy-2").addEventListener("click", copy)

      generatePassword()
    