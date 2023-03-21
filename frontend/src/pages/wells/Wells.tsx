import React, { SyntheticEvent, useEffect, useState } from "react"
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
import { getAllWells } from "../../services/slices/wellsSlice"
import { useSelector } from "../../services/hooks"
import Modal from "../../ui-kit/modal/Modal"
import { openModal, closeModal } from "../../services/slices/modalSlice"
import WellsCard from "../../components/wells/WellsCard"

type TDataChart = {
  contractor: string
  value: number
}

const Contractors: React.FC = () => {
  const { allWells, wellsForChart } = useSelector((store) => store.wells)
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
        {isOpen && (
          <Modal closeModal={handleCloseModal} title={"Добавить скважину"}>
            {"Hello"}
          </Modal>
        )}
        <Navbar
          data={allWells}
          handleClick={onClickHandler}
          activePage={activePage}
        />
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
            <WellsCard {...activeWell} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contractors
