import React, { SyntheticEvent, useEffect, useRef, useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import SquareButton from "../../components/buttons/SquareButton"
import { PlusIcon, MinusIcon } from "../../svg/icons"
import ContractorAddModal from "../../components/modals/ContractorAddModal"
import ContractorDeleteModal from "../../components/modals/ContractorDeleteModal"
import { useDispatch } from "../../services/hooks"
import styles from "./customers.module.scss"
import PieChartComponent from "../../components/charts/PieChart"
import BarChartComponent from "../../components/charts/BarChart"
import { ICustomerData } from "../../types"
import { useSelector } from "../../services/hooks"
import Modal from "../../components/modals/Modal"
import { closeModal, openModal } from "../../services/slices/modalSlice"

const Customers: React.FC = () => {
  const { allCustomers } = useSelector((store) => store.customers)
  const { isOpen } = useSelector((store) => store.modal)
  const [activeCompany, setActiveCompany] = useState<ICustomerData>()
  const [activePage, setActivePage] = useState<number>(0)
  const [clickedButton, setClickedButton] = useState<string>("")
  const dispatch = useDispatch()

  useEffect(() => {
    setActiveCompany(allCustomers[0])
    if (activeCompany) {
      setActivePage(activeCompany.id)
    }
  }, [dispatch])

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
    setActivePage(activeId)
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
          <Modal closeModal={handleCloseModal}>
            {clickedButton === "Добавить подрядчика" && <ContractorAddModal />}
            {clickedButton === "Удалить подрядчика" && (
              <ContractorDeleteModal />
            )}
          </Modal>
        )}
        <Navbar
          data={allCustomers}
          handleClick={onClickHandler}
          activePage={activePage}
        />
        <div className={styles.contractors__container}>
          <div className={styles.contractors__charts}>
            {allCustomers.length > 0 && <PieChartComponent />}
            {allCustomers.length > 0 && <BarChartComponent />}
          </div>
          <div className={styles.contractors__buttons}>
            <SquareButton
              text="Добавить подрядчика"
              onClick={(e: SyntheticEvent) => handleOpenModal(e)}
            >
              <PlusIcon />
            </SquareButton>
            <SquareButton
              text="Удалить подрядчика"
              onClick={(e: SyntheticEvent) => handleOpenModal(e)}
            >
              <MinusIcon />
            </SquareButton>
          </div>
          <div className={styles.contractors__card}>
            {/* {activeCompany && <ContractorsCard contractor={activeCompany} />} */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Customers
