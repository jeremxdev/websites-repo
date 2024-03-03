import React from 'react'
import {FaGithubSquare, FaInstagram} from 'react-icons/fa';

export const Footer = () => {
  return (
    <div class="mt-12 w-max-[800px] border-t border-gray-500 text-center">
        <p class="my-5 text-gray-500">by ImaqueCorporation <br /> &copy; Copyright 2024</p>
        <div class="inline-flex text-gray-500 gap-4 text-3xl">
            <FaGithubSquare />
            <FaInstagram />
        </div>
    </div>
  )
}
