(ns test.main.state.subs 
  (:require [re-frame.core :as re-frame :refer
             [reg-sub]]
             [test.main.state.db :as db]))

(reg-sub
 :name
 (fn [db]
   (:name db)))