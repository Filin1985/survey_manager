import React, { SyntheticEvent, useEffect, useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import SquareButton from "../../components/buttons/SquareButton"
import { PlusIcon, MinusIcon } from "../../svg/icons"
import { useDispatch } from "../../services/hooks"
import styles from "./wells.module.scss"
import PieChartComponent from "../../components/charts/PieChart"
import BarChartComponent from "../../components/charts/BarChart"

import { IWellData } from "../../types"
// import { getAllWells } from "../../services/actions/wells"
import { getAllWells } from "../../services/slices/wellsSlice"
import { useSelector } from "../../services/hooks"
import Modal from "../../components/modals/Modal"
import { openModal, closeModal } from "../../services/slices/modalSlice"

const Contractors: React.FC = () => {
  const { allWells } = useSelector((store) => store.wells)
  const { isOpen } = useSelector((store) => store.modal)
  const [activeWell, setActiveWell] = useState<IWellData>()
  const [activePage, setActivePage] = useState<number>(0)
  const [clickedButton, setClickedButton] = useState<string>("")
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllWells())
    setActiveWell(allWells[0])
    if (activeWell) {
      setActivePage(activeWell.id)
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
    const selectedWell = allWells.find((item) => item.id === activeId)
    if (selectedWell) {
      setActiveWell(selectedWell)
    }
  }

  if (!allWells) {
    return <h1>Загрузка...</h1>
  }

  if (!activeWell) {
    return <h1>Нет данных по подрячикам</h1>
  }

  return (
    <>
      <section className={styles.contractors}>
        {isOpen && <Modal closeModal={handleCloseModal}>{"Hello"}</Modal>}
        <Navbar
          data={allWells}
          handleClick={onClickHandler}
          activePage={activePage}
        />
        <div className={styles.contractors__container}>
          <div className={styles.contractors__charts}>
            {allWells.length > 0 && <PieChartComponent />}
            {allWells.length > 0 && <BarChartComponent />}
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
            {/* {activeWell && <ContractorsCard well={activeWell} />} */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contractors
