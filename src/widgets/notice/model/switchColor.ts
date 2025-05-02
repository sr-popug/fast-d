import { Types } from '@/shared/model/store/notice/notice.slice'

export default function switchColor(color: Types) {
  switch (color) {
    case 'error':
      return { backgroundColor: '#ff2b2b' }
    case 'warning':
      return { backgroundColor: '#ffdf00' }
    case 'message':
      return { backgroundColor: '#0587b7' }
    case 'successful':
      return { backgroundColor: '#008000' }
    default:
      return { backgroundColor: '#ffffff' }
  }
}
