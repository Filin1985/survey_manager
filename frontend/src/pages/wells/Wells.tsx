import React, { SyntheticEvent, useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import SquareButton from "../../ui-kit/buttons/SquareButton"
import {
  AddClusterIcon,
  DeleteClusterIcon,
  AddWellIcon,
  DeleteWellIcon,
} from "../../ui-kit/svg/icons"
import { useDispatch } from "../../services/hooks"
import styles from "./wells.module.scss"
import PieChartComponent from "../../components/charts/PieChart"
import BarChartComponent from "../../components/charts/BarChart"
import { IWellData } from "../../types"
import { useSelector } from "../../services/hooks"
import Modal from "../../ui-kit/modal/Modal"
import { openModal, closeModal } from "../../services/slices/modalSlice"
import WellsCard from "../../components/wells/WellsCard"

const Wells = () => {
  const { allWells, wellsForChart, currentWell } = useSelector(
    (store) => store.wells
  )
  const { isOpen } = useSelector((store) => store.modal)
  const [activeWell, setActiveWell] = useState<IWellData>(currentWell)
  const dispatch = useDispatch()

  const handleOpenModal = (e: SyntheticEvent) => {
    dispatch(openModal())
  }

  const handleCloseModal = () => {
    dispatch(closeModal())
  }

  const onClickHandler = (activeId: number) => {
    const selectedWell = allWells.find((item) => item.id === activeId)
    if (selectedWell) {
      setActiveWell(selectedWell)
    }
  }

  const drillingWells = allWells.filter((well) => well.status === "В бурении")

  if (!(allWells.length > 0)) {
    return <h1>Загрузка...</h1>
  }

  return (
    <>
      <section className={styles.contractors}>
        {isOpen && (
          <Modal closeModal={handleCloseModal} title={"Добавить скважину"}>
            {"Hello"}
          </Modal>
        )}
        {currentWell && (
          <Navbar
            data={drillingWells}
            handleClick={onClickHandler}
            activeWell={activeWell.id}
          />
        )}
        <div className={styles.contractors__container}>
          <div className={styles.contractors__charts}>
            {allWells.length > 0 && <PieChartComponent data={wellsForChart} />}
            {allWells.length > 0 && <BarChartComponent />}
          </div>
          <div className={styles.contractors__buttons}>
            <SquareButton
              text="Добавить куст"
              onClick={(e: SyntheticEvent) => handleOpenModal(e)}
            >
              <AddClusterIcon />
            </SquareButton>
            <SquareButton
              text="Удалить куст"
              onClick={(e: SyntheticEvent) => handleOpenModal(e)}
            >
              <DeleteClusterIcon />
            </SquareButton>
            <SquareButton
              text="Добавить скважину"
              onClick={(e: SyntheticEvent) => handleOpenModal(e)}
            >
              <AddWellIcon />
            </SquareButton>
            <SquareButton
              text="Удалить скважину"
              onClick={(e: SyntheticEvent) => handleOpenModal(e)}
            >
              <DeleteWellIcon />
            </SquareButton>
          </div>
          <div className={styles.contractors__card}>
            {activeWell && <WellsCard {...activeWell} />}
          </div>
        </div>
      </section>
    </>
  )
}

export default Wells
