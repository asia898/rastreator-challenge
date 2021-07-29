import { Modal } from "bootstrap";
import Insurances from "./insurances";
import Loans from "./loans";
import "../style.scss";

const mainModal = new Modal(document.getElementById("compareModal"), {});
mainModal.show();

const insurances = new Insurances();
const loans = new Loans();
