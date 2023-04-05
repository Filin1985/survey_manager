import React, { SyntheticEvent, useEffect, useRef, useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import SquareButton from "../../ui-kit/buttons/SquareButton"
import { PlusIcon, MinusIcon } from "../../ui-kit/svg/icons"
import ContractorAddModal from "../../components/modals/ContractorAddModal"
import ContractorDeleteModal from "../../components/modals/ContractorDeleteModal"
import { useDispatch } from "../../services/hooks"
import styles from "./contractors.module.scss"
import PieChartComponent from "../../components/charts/PieChart"
import BarChartComponent from "../../components/charts/BarChart"
import ContractorsCard from "../../components/contractors/ContractorsCard"
import { IContractorData } from "../../types"
import { useSelector } from "../../services/hooks"
import Modal from "../../ui-kit/modal/Modal"
import { closeModal, openModal } from "../../services/slices/modalSlice"

const Contractors: React.FC = () => {
  const { allContractors, contractorsForChart } = useSelector(
    (store) => store.contractors
  )
  const { isOpen } = useSelector((store) => store.modal)
  const [activeCompany, setActiveCompany] = useState<IContractorData>(
    allContractors[0]
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
    const selectedCompany = allContractors.find((item) => item.id === activeId)
    if (selectedCompany) {
      setActiveCompany(selectedCompany)
    }
  }

  if (!allContractors) {
    return <h1>Загрузка...</h1>
  }

  return (
    <>
      <section className={styles.contractors}>
        {isOpen && (
          <Modal
            closeModal={handleCloseModal}
            title={
              clickedButton === "Добавить подрядчика"
                ? "Добавить подрядчика"
                : "Удалить подрядчика"
            }
          >
            {clickedButton === "Добавить подрядчика" && <ContractorAddModal />}
            {clickedButton === "Удалить подрядчика" && (
              <ContractorDeleteModal />
            )}
          </Modal>
        )}
        {activeCompany && (
          <Navbar
            data={allContractors}
            handleClick={onClickHandler}
            activeWell={activeCompany.id}
          />
        )}
        <div className={styles.contractors__container}>
          <div className={styles.contractors__charts}>
            {allContractors.length > 0 && (
              <PieChartComponent data={contractorsForChart} />
            )}
            {allContractors.length > 0 && <BarChartComponent />}
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
            {activeCompany && <ContractorsCard contractor={activeCompany} />}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contractors
