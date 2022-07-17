import React from "react";
import './GoogleCopy.css';
import { MdSearch } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";

const GoogleCopy = () => {
    return (
      <div class="page-div">
        <div class="account-div">
          <a href="/googlecopy" class="account-gmail">
            Gmail
          </a>
          <a href="/googlecopy" class="account-images">
            Images
          </a>

          <TbGridDots className="dots"></TbGridDots>
          <a href="/googlecopy" class="sign-in">
            Sign in
          </a>
        </div>

        <h1 class="page-logo">Google</h1>

        <div class="search-bar">
          <MdSearch class="fas fa-search icon"></MdSearch>
          <input
            type="text"
            placeholder="Search Google or type a URL"
            class="search-input"
          />
          <a href="/googlecopy">
            <FaMicrophone class=" search-microphone"></FaMicrophone>
          </a>
        </div>
        <div class="shortcut-box">
          <div class="shortcut-box-icon">
            <p class="shortcut-icon">+</p>
          </div>
          <p class="shortcut-text">Add shortcut</p>
        </div>
      </div>
    );
}

export default GoogleCopy;