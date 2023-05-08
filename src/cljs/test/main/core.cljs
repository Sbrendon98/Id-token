(ns test.main.core
  (:require
   [reagent.core :as r]
   [reagent.dom :as d]
   ["react-router-dom" :as router]
   [re-frame :as re-frame]
   [login-comp :as log-com]
   ))

;; -------------------------
;; Views

(defn home-page []
  [:div [:h2 "Welcome to Reagent!"]
   [:div.main [:h1 "FUCKING FINALLY!"]]])

(defn root [])
;; -------------------------
;; Initialize app

(defn ^:dev/after-load mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export ^:dev/once init! []
  (mount-root))
