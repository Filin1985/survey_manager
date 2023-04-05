import React, { SyntheticEvent, useEffect, useRef, useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import SquareButton from "../../ui-kit/buttons/SquareButton"
import { PlusIcon, MinusIcon } from "../../ui-kit/svg/icons"
import ContractorAddModal from "../../components/modals/ContractorAddModal"
import ContractorDeleteModal from "../../components/modals/ContractorDeleteModal"
import { useDispatch } from "../../services/hooks"
import styles from "./customers.module.scss"
import PieChartComponent from "../../components/charts/PieChart"
import BarChartComponent from "../../components/charts/BarChart"
import { ICustomerData } from "../../types"
import { useSelector } from "../../services/hooks"
import Modal from "../../ui-kit/modal/Modal"
import { closeModal, openModal } from "../../services/slices/modalSlice"
import CustomerCard from "../../components/customers/CustomerCard"

const Customers: React.FC = () => {
  const { allCustomers, customersForCharts } = useSelector(
    (store) => store.customers
  )
  const { isOpen } = useSelector((store) => store.modal)
  const [activeCompany, setActiveCompany] = useState<ICustomerData>(
    allCustomers[0]
  )
  const [clickedButton, setClickedButton] = useState<string>("")
  const dispatch = useDispatch()

  const handleOpenModal = (e: SyntheticEvent) => {
    if (e.currentTarget.textContent) {
      setClickedButton(e.currentTarget.textContent)
    }
    dispatch(openModal())
  }

  const handleCloseModal = () => {
    setClickedButton("")
    dispatch(closeModal())
  }

  const onClickHandler = (activeId: number) => {
    const selectedCompany = allCustomers.find((item) => item.id === activeId)
    if (selectedCompany) {
      setActiveCompany(selectedCompany)
    }
  }

  if (!allCustomers) {
    return <h1>Загрузка...</h1>
  }

  return (
    <>
      <section className={styles.contractors}>
        {isOpen && (
          <Modal
            closeModal={handleCloseModal}
            title={
              clickedButton === "Добавить заказчика"
                ? "Добавить заказчика"
                : "Удалить заказчика"
            }
          >
            {clickedButton === "Добавить заказчика" && <ContractorAddModal />}
            {clickedButton === "Удалить заказчика" && <ContractorDeleteModal />}
          </Modal>
        )}
        {activeCompany && (
          <Navbar
            data={allCustomers}
            handleClick={onClickHandler}
            activeWell={activeCompany.id}
          />
        )}
        <div className={styles.contractors__container}>
          <div className={styles.contractors__charts}>
            {allCustomers.length > 0 && (
              <PieChartComponent data={customersForCharts} />
            )}
            {allCustomers.length > 0 && <BarChartComponent />}
          </div>
          <div className={styles.contractors__buttons}>
            <SquareButton
              text="Добавить заказчика"
              onClick={(e: SyntheticEvent) => handleOpenModal(e)}
            >
              <PlusIcon />
            </SquareButton>
            <SquareButton
              text="Удалить заказчика"
              onClick={(e: SyntheticEvent) => handleOpenModal(e)}
            >
              <MinusIcon />
            </SquareButton>
          </div>
          <div className={styles.contractors__card}>
            {activeCompany && <CustomerCard customer={activeCompany} />}
          </div>
        </div>
      </section>
    </>
  )
}

export default Customers
