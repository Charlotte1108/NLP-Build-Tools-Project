// js

import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { classifyURL } from "./js/classifyURL"
import { serviceWorkerInit } from "./js/swInit"

// styles
import "./styles/resets.css"
import "./styles/base.scss"
import "./styles/header.scss"
import "./styles/form.scss"
import "./styles/footer.scss"

// initialise
classifyURL()
serviceWorkerInit()
