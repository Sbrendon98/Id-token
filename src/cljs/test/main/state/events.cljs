(ns test.main.state.events
   (:require [re-frame.core :as re-frame :refer [reg-event-db]]
             [test.main.state.db :as db]))

(reg-event-db
 :initialize-db
 (fn [_ _]
   db/default-db))