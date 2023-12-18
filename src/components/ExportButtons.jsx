import '../css/ExportButtons.css'
import useExportbtn from './hooks/useExportbtn';

const ExportButtons = () => {
  const {
    handleDownload
  } = useExportbtn();
  return (
    <div className='buttonContainer'>
        <button onClick={handleDownload}>
            Get Previous 5 Day's Report
        </button>
    </div>
  )
}

export default ExportButtons;
