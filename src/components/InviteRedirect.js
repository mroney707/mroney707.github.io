import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const InviteRedirect = () => {
  const { id } = useParams()
  
  useEffect(() => {
    // You can use the id parameter here if needed
    window.location.href = 'https://apps.apple.com/us/app/scout-shopping-assistant/id6479646798'
  }, [])

  return null
}

export default InviteRedirect 