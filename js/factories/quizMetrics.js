function(){
	var metrics = angular.module('turtleFacts', [])

	metrics.factory('quizMetrics', QuizMetrics)

	function QuizMetrics(){
		quizObj = {
			quizActive : false
		}
		return quizObj
	}
}