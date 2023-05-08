(ns test.main.state.views
  (:require [re-frame.core :as re-frame]))

(def main-panel [] 
  (let [name (re-frame/subcribe [:name])]
    (fn []
      [:div "Hello from" @name])))

;;Form 1 component
(defn form-1 []
  [:div "Hello from form 1 component"])

;;Form 2 component, more common component
(defn form-2 [prop1 prop2]
  fn [prop1 prop2]
  [:div "Hello from form 2 component"])