function(){
	var mimi = angular.module('turtleFacts', [])
	mimi.factory('quizMetrics', QuizMetrics)

	function QuizMetrics(){
		var quizObj = {
			quizActive = false
		}
	}
}()