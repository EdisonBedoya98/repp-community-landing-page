import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "../index.css"
import TermsAndConditions from "./TermsAndConditions.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TermsAndConditions />
  </StrictMode>,
)
