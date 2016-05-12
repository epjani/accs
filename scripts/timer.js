var CountDown = (function ($) {
    CountdownStarted = false;
    var TimeOut = 10000;
    var TimeGap = 1000;
    
    var CurrentTime = ( new Date() ).getTime();
    var EndTime = ( new Date() ).getTime() + TimeOut;
    
    
    var Running = true;
    
    var UpdateTimer = function() {
        if( CurrentTime + TimeGap < EndTime ) { setTimeout( UpdateTimer, TimeGap ); }
        if( Running ) { CurrentTime += TimeGap; }
        
        var Time = new Date();
        Time.setTime( EndTime - CurrentTime );
        var Minutes = Time.getMinutes();
        var Seconds = Time.getSeconds();
        var minutes_left = (Minutes < 10 ? '0' : '') + Minutes;
        var seconds_left = (Seconds < 10 ? '0' : '') + Seconds;
        display_time(minutes_left, seconds_left);
    };
    
    var Pause = function() {
        Running = false;
    };
    
    var Resume = function(timeout) {
        if (timeout != null) {
            display_time('', '');
            Timeout = timeout;
            CurrentTime = ( new Date() ).getTime();
            EndTime = ( new Date() ).getTime() + TimeOut;
        }
        Running = true;
    };
    
    var Start = function( Timeout ) {
        CountdownStarted = true;
        TimeOut = Timeout;
        CurrentTime = ( new Date() ).getTime();
        EndTime = ( new Date() ).getTime() + TimeOut;
        UpdateTimer();
    };

    return {
        Pause: Pause,
        Resume: Resume,
        Start: Start
    };
})(jQuery);