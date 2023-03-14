(ns test.main.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init       (fn []
                 (log/info "\n-=[test.main starting]=-"))
   :start      (fn []
                 (log/info "\n-=[test.main started successfully]=-"))
   :stop       (fn []
                 (log/info "\n-=[test.main has shut down successfully]=-"))
   :middleware (fn [handler _] handler)
   :opts       {:profile :prod}})
