import { jsPDF } from 'jspdf'
import Papa from 'papaparse'

export function exportToCSV(data: any[], filename: string) {
  const csv = Papa.unparse(data)
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.setAttribute('download', filename)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export function exportToPDF(data: any[], filename: string) {
  const doc = new jsPDF()
  doc.setFontSize(18)
  doc.text('Analytics Data', 20, 20)

  // Table headers
  const headers = Object.keys(data[0])
  let y = 30
  doc.setFontSize(12)
  headers.forEach((header, index) => {
    doc.text(header, 20 + index * 40, y)
  })

  // Table rows
  y += 10
  data.forEach((row, rowIndex) => {
    headers.forEach((header, colIndex) => {
      doc.text(String(row[header]), 20 + colIndex * 40, y + rowIndex * 10)
    })
  })

  doc.save(filename)
}