// js

import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import * as classifyURL from "./js/classifyURL"
import { serviceWorkerInit } from "./js/swInit"

// styles
import "./styles/resets.css"
import "./styles/base.scss"
import "./styles/header.scss"
import "./styles/form.scss"
import "./styles/results.scss"
import "./styles/footer.scss"

// initialise
classifyURL.addClassifyURLEvent();
serviceWorkerInit()
