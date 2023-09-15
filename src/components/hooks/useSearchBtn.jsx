
export default function useSearchBtn({refInput,refClose}) {
   const handleX = () => {
    if(refInput){
        console.log('changed', refClose)
    }
   }
 
  return {
    handleX
  }
}
