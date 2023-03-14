(ns test.main.env
  (:require
    [clojure.tools.logging :as log]
    [test.main.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init       (fn []
                 (log/info "\n-=[test.main starting using the development or test profile]=-"))
   :start      (fn []
                 (log/info "\n-=[test.main started successfully using the development or test profile]=-"))
   :stop       (fn []
                 (log/info "\n-=[test.main has shut down successfully]=-"))
   :middleware wrap-dev
   :opts       {:profile       :dev
                :persist-data? true}})
