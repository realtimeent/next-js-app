import { MdPlumbing } from 'react-icons/md'
import { BsPhone } from 'react-icons/bs'
import { AiFillCar } from 'react-icons/ai'
import { HiOutlineShoppingBag } from 'react-icons/hi'

export const data = [
  {
    page: 'Services',

    Links: [
      {
        type: 'car rental',
        icon: <AiFillCar />,
        path: 'car-rental',
        sub: 'Tailored Car Reservation',
      },
      {
        type: 'phones',
        icon: <BsPhone />,
        path: 'phones',
        sub: 'Secure a phone',
      },
      {
        type: 'plumbing',
        icon: <MdPlumbing />,
        path: 'plumbing',
        sub: 'Pipe and Fixture Services',
      },
    ],
  },
  {
    page: 'Shop',
    Links: [
      {
        type: 'buy from js-innovation',
        icon: <HiOutlineShoppingBag />,
        path: 'best-sell-js-innovations',
        sub: 'your ultimate supply chain',
      },
    ],
  },
]
