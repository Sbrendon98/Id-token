(ns build
  (:require [clojure.string :as string]
            [clojure.tools.build.api :as b] 
    [babashka.fs :refer [copy-tree]] 
    [babashka.process :refer [shell]])) 

 (defn build-cljs [] (println "npx shadow-cljs release app...") (let [{:keys [exit], :as s} (shell "npx shadow-cljs release app")] (when-not (zero? exit) (throw (ex-info "could not compile cljs" s))) (copy-tree "target/classes/cljsbuild/public" "target/classes/public")))

(def lib 'test.main)
(def main-cls (string/join "." (filter some? [(namespace lib) (name lib) "core"])))
(def version (format "0.0.1-SNAPSHOT"))
(def target-dir "target")
(def class-dir (str target-dir "/" "classes"))
(def uber-file (format "%s/%s-standalone.jar" target-dir (name lib)))
(def basis (b/create-basis {:project "deps.edn"}))

(defn clean
  "Delete the build target directory"
  [_]
  (println (str "Cleaning " target-dir))
  (b/delete {:path target-dir}))

(defn prep [_]
  (println "Writing Pom...")
  (b/write-pom {:class-dir class-dir
                :lib lib
                :version version
                :basis basis
                :src-dirs ["src/clj"]})
  (b/copy-dir {:src-dirs ["src/clj" "resources" "env/prod/resources" "env/prod/clj"]
               :target-dir class-dir}))

(defn uber [_]
  (println "Compiling Clojure...")
  (b/compile-clj {:basis basis
                  :src-dirs ["src/clj" "resources" "env/prod/resources" "env/prod/clj"]
                  :class-dir class-dir}) 
  (build-cljs)
  (println "Making uberjar...")
  (b/uber {:class-dir class-dir
           :uber-file uber-file
           :main main-cls
           :basis basis}))

(defn all [_]
  (do (clean nil) (prep nil) (uber nil)))
