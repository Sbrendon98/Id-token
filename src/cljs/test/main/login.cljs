(ns test.main.login
  (:require 
   [reagent.core :as r]))

(defn login-comp []
  [:<> 
   [:div.user-info 
    "Username"
    :input {:type "text"}]])
