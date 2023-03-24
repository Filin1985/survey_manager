interface IWellsOnStatus {
  subsidiary: string
  bush: string
  well: string
}

export interface IWellData {
  name: string
  latest_activity?: string
  color?: string
  pending: IWellsOnStatus[]
  in_drilling: IWellsOnStatus[]
  drilled: IWellsOnStatus[]
}

export const initialData: IWellData[] = [
  {
    name: "Baker Hughes",
    latest_activity: "В бурении",
    color: "#FED602",
    pending: [{ subsidiary: "Севкомнефтегаз", bush: "20", well: "123" }],
    in_drilling: [
      { subsidiary: "Верхнечонскнефтегаз", bush: "30", well: "234" },
    ],
    drilled: [{ subsidiary: "Оренбургнефть", bush: "40", well: "345" }],
  },
  {
    name: "Schlumberger",
    latest_activity: "В ожидании",
    color: "#4DC3F7",
    pending: [{ subsidiary: "Севкомнефтегаз", bush: "20", well: "123" }],
    in_drilling: [
      { subsidiary: "Верхнечонскнефтегаз", bush: "30", well: "234" },
    ],
    drilled: [{ subsidiary: "Оренбургнефть", bush: "40", well: "345" }],
  },
  {
    name: "Weatherford",
    latest_activity: "Добурены",
    color: "#BD65A4",
    pending: [{ subsidiary: "Севкомнефтегаз", bush: "20", well: "123" }],
    in_drilling: [
      { subsidiary: "Верхнечонскнефтегаз", bush: "30", well: "234" },
    ],
    drilled: [{ subsidiary: "Оренбургнефть", bush: "40", well: "345" }],
  },
]
