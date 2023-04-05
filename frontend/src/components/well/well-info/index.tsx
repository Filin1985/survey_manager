import { Link, useNavigate } from "react-router-dom"
import styles from "./well-info.module.scss"
import { Document, Envelop } from "../../../ui-kit/svg/icons"
import { useSelector, useDispatch } from "../../../services/hooks"
import { openModal, closeModal } from "../../../services/slices/modalSlice"
import Button from "../../../ui-kit/buttons/Button"
import Modal from "../../../ui-kit/modal/Modal"
import WellTuneModal from "../../modals/WellTuneModal"

export const WellInfo = () => {
  const { activeDataWell } = useSelector((store) => store.wells)
  const { isOpen } = useSelector((store) => store.modal)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleOpenModal = () => {
    dispatch(openModal())
  }

  const handleCloseModal = () => {
    dispatch(closeModal())
  }

  return (
    <>
      {isOpen && activeDataWell && (
        <Modal
          closeModal={handleCloseModal}
          title="Изменить настройки скважины"
        >
          <WellTuneModal {...activeDataWell} />
        </Modal>
      )}
      <div className={styles.wellact__box}>
        <div className={styles.wellact__info}>
          <p className={styles.wellact__field}>
            {activeDataWell?.customer} - {activeDataWell?.field} месторождение
          </p>
          <p className={styles.wellact__number}>
            Куст {activeDataWell?.rig}, Скважина {activeDataWell?.well_number},
            Транспортная секция
          </p>
          <p className={styles.wellact__status}>{activeDataWell?.status}</p>
        </div>
        <div className={styles.wellact__insert}>
          <p className={styles.wellact__title}>Дата внесения данных</p>
          <p className={styles.wellact__date}>29.03.2023</p>
        </div>
      </div>
      <div className={styles.wellact__acts}>
        <p className={styles.wellact__title}>Действия</p>
        <div className={styles.wellact__report}>
          <div className={styles.wellact__stat}>
            <Link to="#">
              <Document />
            </Link>

            <p className={styles.wellact__text}>
              Настроить шаблон отчета{" "}
              <span className={styles.wellact__text_blue}>
                (статические замеры)
              </span>
            </p>
          </div>
          <div className={styles.wellact__stat}>
            <Link to="#">
              <Document />
            </Link>
            <p className={styles.wellact__text}>
              Настроить шаблон отчета{" "}
              <span className={styles.wellact__text_blue}>
                (динамические замеры)
              </span>
            </p>
          </div>
        </div>
        <div className={styles.wellact__letter}>
          <div className={styles.wellact__stat}>
            <Link
              to="#"
              onClick={(e) => {
                window.location.href = "mailto:no-reply@example.com"
                e.preventDefault()
              }}
            >
              <Envelop />
            </Link>
            <p className={styles.wellact__text}>
              Настроить шаблон письма{" "}
              <span className={styles.wellact__text_blue}>
                (статические замеры)
              </span>
            </p>
          </div>
          <div className={styles.wellact__stat}>
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault()
              }}
            >
              <Envelop />
            </Link>
            <p className={styles.wellact__text}>
              Настроить шаблон письма{" "}
              <span className={styles.wellact__text_blue}>
                (динамические замеры)
              </span>
            </p>
          </div>
        </div>
      </div>
      <Button
        className={styles.parameters__button_wellbore}
        htmlType="button"
        size="small"
        onClick={handleOpenModal}
      >
        Настройки
      </Button>
    </>
  )
}
