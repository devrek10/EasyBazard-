import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useProfileMutation } from '../../redux/api/usersSlice'
import { setCredenials } from '../../redux/features/auth/authSlice'

import { toast } from 'react-toastify'
import Loader from '../../components/Loader'

const Profile = () => {
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  
  const {userInfo} = useSelector((state) => state.auth)
  const [updateProfile, { isLoading: loadingUpdateProfile}] = useProfileMutation()

  useEffect(() => {
    setUserName(userInfo.username)
    setEmail(userInfo.email)
  }, [userInfo.email, userInfo.username])

  const dispatch = useDispatch()

  const submitHnadler = async(e) => {
   e.preventDefault()
   if(password !== confirmPassword){
    toast.error("Les mots de passe ne sont pas identique")
   } else {
    try {
      const res = await updateProfile({
        _id: userInfo._id,
        username,
        password,
      }).unwrap()
      dispatch(setCredenials({...res}))
      toast.success("Mise à jour du profil reussir")
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
   }
  }
  return (
    <div className='"container mx-auto p-4 mt-[5rem]'>
     <div className='flex justify-center align-center md:flex md:space-x-4'>
       <div className='md:w-1/3'>
         <h2 className='text-2xl font-semibold mb-4 text-white'>Mettre à jour le Profile</h2>
          <form onSubmit={submitHnadler}>
            <div className='mb-4'>
             <label className='block mt-2 text-white'>Nom</label>
             <input 
             type="text" 
             placeholder='Entrer le nom'
             className='form-input p-4 rounded-sm w-full'
             value={username}
             onChange={(e) => setUserName(e.target.value)}
             />
            </div>

            <div className='mb-4'>
             <label className='block mt-2 text-white'>Email</label>
             <input 
             type="email" 
             placeholder="Enter l'adresse Email"
             className='form-input p-4 rounded-sm w-full'
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             />
            </div>

            <div className='mb-4'>
             <label className='block mt-2 text-white'>Mot de passe</label>
             <input 
             type="password" 
             placeholder='Entrer le mot de passe'
             className='form-input p-4 rounded-sm w-full'
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             />
            </div>

            <div className='mb-4'>
             <label className='block mt-2 text-white'>Confirme le mot de passe</label>
             <input 
             type="password" 
             placeholder='Confirmer le mot de passe'
             className='form-input p-4 rounded-sm w-full'
             value={confirmPassword}
             onChange={(e) => setConfirmPassword(e.target.value)}
             />
            </div>

            <div className='flex justify-between'>
              <button
               type='submit'
               className='bg-pink-600 py-2 px-4 rounded hover:bg-pink-700'
              >
               Update
              </button>
              <Link
              to="/user-orders"
              className="bg-pink-600 py-2 px-4 rounded hover:bg-pink-700"
              >
              Mes commandes
              </Link>
            </div>
            {loadingUpdateProfile && <Loader />}
          </form>
       </div>
     </div>
    </div>
  )
}

export default Profile
